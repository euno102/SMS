// 랜딩페이지 문구 데이터
export const hero = {
  eyebrow: 'AI Surgical Safety Platform',
  titleEn: "We're building an AI-powered surgical Management System.",
  titleKo: 'AI 기반 수술 안전 예측 시스템, SMS를 만들고 있습니다.',
  subEn: "Let's call it SMS for now.",
  subKo: '편의상 프로젝트 이름을 SMS라고 부르겠습니다.',
};

export const problem = {
  label: 'The Problem',
  titleKo: '지금의 수술실 모니터는, 이미 늦었을 때만 알려줍니다',
  bodyEn:
    "During surgery, a drop in blood pressure is a very dangerous sign. But today's machines have a big limit. They only ring a simple alarm. They just say, 'Blood pressure is low right now.' They do NOT predict the drop in advance, leaving doctors to react too late.",
  bodyKo:
    "수술 중 혈압 저하는 매우 위험한 신호입니다. 하지만 현재 기기들에는 큰 한계가 있습니다. 그저 단순한 알람만 울립니다. '지금 당장 혈압이 낮다'고만 할 뿐, 언제 혈압이 떨어질지 미리 예측하지 못해 의사들이 뒤늦게 대처할 수밖에 없게 만듭니다.",
};

export const solution = {
  label: 'Our Solution',
  titleKo: '실시간 혈압 데이터를 분석해, 저혈압을 미리 예측합니다',
  bodyEn:
    "That is why we created our AI. It analyzes the patient's blood pressure in real-time. Then, it accurately predicts upcoming hypotension. Instead of a simple beep, doctors can see the danger in advance and prepare for it.",
  bodyKo:
    '그래서 저희는 이 AI를 만들었습니다. 환자의 혈압을 실시간으로 분석해서, 다가올 저혈압을 정확히 예측합니다. 단순한 경고음 대신, 의사들은 다가올 위험을 미리 파악하고 대비할 수 있습니다.',
};

export const coreValues = {
  label: 'Core Value',
  titleKo: '의사에게는 빠른 판단을, 병원에는 안전한 성과를',
  bodyEn:
    'This brings two massive benefits. First, for doctors: it helps them make the best, fastest decisions during surgery. Second, for hospitals: by preventing critical emergencies, hospitals can increase their success rates and save a lot of unexpected costs.',
  bodyKo:
    '이것은 두 가지 엄청난 이점을 가져옵니다. 첫째, 의사들에게는 수술 중 가장 빠르고 최적의 결정을 내리도록 돕습니다. 둘째, 병원 입장에서는 치명적인 응급 상황을 예방함으로써 수술 성공률을 높이고 예상치 못한 엄청난 비용을 절감할 수 있습니다.',
  cards: [
    {
      audience: 'For Doctors',
      titleKo: '가장 빠르고 정확한 판단',
      bodyKo: '수술 중 가장 빠르고 최적의 의사결정을 내리도록 돕습니다.',
    },
    {
      audience: 'For Hospitals',
      titleKo: '수술 성공률 상승 · 비용 절감',
      bodyKo: '치명적인 응급 상황을 예방해 성공률을 높이고, 예상치 못한 비용을 절감합니다.',
    },
  ],
};

export const targetMarket = {
  label: 'Target Market',
  titleKo: '대형 병원을 위한 B2B 서비스입니다',
  bodyEn:
    'Our target market is large hospitals. We are a B2B service. Our main users in the operating room are surgeons and anesthesiologists. But hospital managers will also love this because it improves patient safety and saves money.',
  bodyKo:
    '저희의 타겟 시장은 대형 병원입니다. B2B 서비스이며, 수술실에서의 메인 유저는 집도의와 마취 전문의입니다. 하지만 환자 안전을 높이고 비용을 절감해주기 때문에 병원 경영진 역시 이 모델을 아주 좋아할 것입니다.',
  personas: [
    { role: '집도의 (Surgeon)', note: '수술 중 핵심 의사결정권자' },
    { role: '마취 전문의 (Anesthesiologist)', note: '혈압·활력징후 실시간 관리 책임자' },
    { role: '병원 경영진 (Hospital Manager)', note: '환자 안전 지표와 비용 효율을 함께 고려' },
  ],
};
