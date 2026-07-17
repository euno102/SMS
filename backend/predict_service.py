from typing import Any, Dict, List, Union

from google.cloud import aiplatform
from google.protobuf import json_format
from google.protobuf.struct_pb2 import Value

PROJECT_ID = "290578370505"
ENDPOINT_ID = "3277767857458380800"
LOCATION = "us-central1"
API_ENDPOINT = f"{LOCATION}-aiplatform.googleapis.com"

_client: aiplatform.gapic.PredictionServiceClient | None = None


def _get_client() -> aiplatform.gapic.PredictionServiceClient:
    # 클라이언트는 한 번만 만들어 재사용 (매 요청마다 새로 만들지 않음)
    global _client
    if _client is None:
        _client = aiplatform.gapic.PredictionServiceClient(
            client_options={"api_endpoint": API_ENDPOINT}
        )
    return _client


def _build_instance(user_input: Dict[str, Any]) -> Dict[str, str]:
    """사용자 입력(dict)을 Vertex AI가 기대하는 feature dict로 변환.
    테이블형 모델은 값이 문자열이어야 하므로 전부 str로 캐스팅.
    """
    return {key: "" if value is None else str(value) for key, value in user_input.items()}


def predict_tabular_classification(
    user_input: Union[Dict[str, Any], List[Dict[str, Any]]],
) -> Union[Dict[str, Any], List[Dict[str, Any]]]:
    """user_input: 단일 요청이면 {feature: value, ...} dict,
    배치 요청이면 [{...}, {...}] 형태의 list.
    """
    is_batch = isinstance(user_input, list)
    raw_instances = user_input if is_batch else [user_input]

    client = _get_client()
    endpoint = client.endpoint_path(
        project=PROJECT_ID, location=LOCATION, endpoint=ENDPOINT_ID
    )

    instances = [
        json_format.ParseDict(_build_instance(item), Value()) for item in raw_instances
    ]
    parameters = json_format.ParseDict({}, Value())

    response = client.predict(endpoint=endpoint, instances=instances, parameters=parameters)

    results = []
    for prediction in response.predictions:
        pred_dict = dict(prediction)
        classes: List[str] = list(pred_dict.get("classes", []))
        scores: List[float] = list(pred_dict.get("scores", []))

        if classes and scores:
            best_idx = max(range(len(scores)), key=lambda i: scores[i])
            results.append(
                {
                    "predicted_class": classes[best_idx],
                    "confidence": scores[best_idx],
                    "all_scores": dict(zip(classes, scores)),
                }
            )
        else:
            # classes/scores 키가 없는 경우를 대비한 원본 반환
            results.append(pred_dict)

    return results if is_batch else results[0]
