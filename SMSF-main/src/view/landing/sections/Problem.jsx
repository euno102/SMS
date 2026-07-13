// 문제 제기 섹션
import { FiBellOff, FiClock, FiAlertCircle } from 'react-icons/fi';
import { problem } from '../../../data/content';

function Problem() {
  return (
    <section id="problem" className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2">
      <div className="order-2 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:order-1">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">기존 모니터의 한계</div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
            <FiAlertCircle className="shrink-0 text-red-500" size={22} />
            <div>
              <div className="text-sm font-semibold text-slate-900">"혈압이 지금 낮습니다"</div>
              <div className="text-xs text-slate-500">이미 저혈압이 발생한 뒤에야 단순 알람만 울림</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
            <FiBellOff className="shrink-0 text-slate-400" size={22} />
            <div>
              <div className="text-sm font-semibold text-slate-900">사전 예측 없음</div>
              <div className="text-xs text-slate-500">언제 혈압이 떨어질지 미리 알려주지 않음</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
            <FiClock className="shrink-0 text-amber-500" size={22} />
            <div>
              <div className="text-sm font-semibold text-slate-900">뒤늦은 대처</div>
              <div className="text-xs text-slate-500">의사가 대응할 수 있는 골든타임을 놓치게 됨</div>
            </div>
          </div>
        </div>
      </div>

      <div className="order-1 flex flex-col gap-4 lg:order-2">
        <span className="w-fit text-xs font-semibold uppercase tracking-wide text-red-500">{problem.label}</span>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{problem.titleKo}</h2>
        <p className="text-sm leading-relaxed text-slate-500">{problem.bodyEn}</p>
        <p className="text-base leading-relaxed text-slate-700">{problem.bodyKo}</p>
      </div>
    </section>
  );
}

export default Problem;
