// 히어로(타이틀)
import { FiArrowRight, FiAlertTriangle } from 'react-icons/fi';
import { hero } from '../../../data/content';

function Hero() {
  return (
    <section id="top" className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
      <div className="flex flex-col gap-5">
        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {hero.eyebrow}
        </span>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {hero.titleKo}
        </h1>
        <p className="text-sm leading-relaxed text-slate-500">{hero.titleEn}</p>
        <p className="text-base text-slate-600">{hero.subKo}</p>

        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href="#market"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white no-underline"
          >
            데모 요청하기 <FiArrowRight size={15} />
          </a>
          <a
            href="#problem"
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 no-underline"
          >
            문제부터 보기
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900">실시간 혈압 모니터링</div>
          <span className="flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-600">
            <FiAlertTriangle size={12} /> 저혈압 예측
          </span>
        </div>

        <svg viewBox="0 0 400 180" className="w-full">
          <line x1="0" y1="60" x2="400" y2="60" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="0" y1="110" x2="400" y2="110" stroke="#e2e8f0" strokeWidth="1" />

          <rect x="260" y="0" width="140" height="180" fill="#fef2f2" />
          <line x1="260" y1="0" x2="260" y2="180" stroke="#fca5a5" strokeDasharray="4 4" strokeWidth="1.5" />

          <path
            d="M0,70 C30,60 60,80 90,65 C120,50 150,70 180,60 C210,50 235,55 260,65 C290,80 320,115 350,140 C365,152 380,158 400,162"
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <circle cx="260" cy="65" r="4" fill="#2563eb" />
          <text x="270" y="30" fontSize="11" fill="#dc2626" fontWeight="700">예측: 저혈압 위험 82%</text>
          <text x="6" y="18" fontSize="10" fill="#94a3b8">MAP (mmHg)</text>
          <text x="360" y="175" fontSize="10" fill="#94a3b8">시간 →</text>
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="text-[11px] text-slate-400">현재 MAP</div>
            <div className="mt-1 text-lg font-bold text-slate-900">78 <span className="text-xs font-normal text-slate-400">mmHg</span></div>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="text-[11px] text-slate-400">예측 도달까지</div>
            <div className="mt-1 text-lg font-bold text-slate-900">6<span className="text-xs font-normal text-slate-400">분</span></div>
          </div>
          <div className="rounded-xl bg-red-50 p-3">
            <div className="text-[11px] text-red-500">저혈압 위험도</div>
            <div className="mt-1 text-lg font-bold text-red-600">82%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
