// 솔루션 소개
import { FiCpu, FiTrendingDown, FiEye } from 'react-icons/fi';
import { solution } from '../../../data/content';

function Solution() {
  return (
    <section id="solution" className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <span className="w-fit text-xs font-semibold uppercase tracking-wide text-blue-600">{solution.label}</span>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{solution.titleKo}</h2>
        <p className="text-sm leading-relaxed text-slate-500">{solution.bodyEn}</p>
        <p className="text-base leading-relaxed text-slate-700">{solution.bodyKo}</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">SMS의 접근 방식</div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <FiCpu className="shrink-0 text-blue-600" size={22} />
            <div>
              <div className="text-sm font-semibold text-slate-900">실시간 AI 분석</div>
              <div className="text-xs text-slate-600">환자의 혈압 데이터를 지속적으로 학습·분석</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <FiTrendingDown className="shrink-0 text-blue-600" size={22} />
            <div>
              <div className="text-sm font-semibold text-slate-900">저혈압 사전 예측</div>
              <div className="text-xs text-slate-600">다가올 저혈압 위험을 시간 단위로 미리 예측</div>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <FiEye className="shrink-0 text-blue-600" size={22} />
            <div>
              <div className="text-sm font-semibold text-slate-900">한눈에 보는 위험도</div>
              <div className="text-xs text-slate-600">단순 경고음 대신 명확한 위험 신호로 대비</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
