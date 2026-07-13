// 타겟 시장 섹션
import { FiBriefcase, FiUserCheck, FiActivity, FiPieChart, FiArrowRight } from 'react-icons/fi';
import { targetMarket } from '../../../data/content';

const PERSONA_ICONS = [FiActivity, FiUserCheck, FiPieChart];

// 타겟 시장
function TargetMarket() {
  return (
    <section id="market" className="py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          <FiBriefcase size={12} /> B2B · Large Hospitals
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{targetMarket.label}</span>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{targetMarket.titleKo}</h2>
        <p className="text-sm leading-relaxed text-slate-500">{targetMarket.bodyEn}</p>
        <p className="text-base leading-relaxed text-slate-700">{targetMarket.bodyKo}</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
        {targetMarket.personas.map((p, i) => {
          const Icon = PERSONA_ICONS[i];
          return (
            <div key={p.role} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Icon size={20} />
              </div>
              <div className="mt-3 text-sm font-semibold text-slate-900">{p.role}</div>
              <div className="mt-1 text-xs leading-relaxed text-slate-500">{p.note}</div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-3 rounded-3xl bg-blue-600 p-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
        <div>
          <div className="text-lg font-bold">병원 도입을 검토 중이신가요?</div>
          <div className="mt-1 text-sm text-blue-100">SMS 데모를 통해 실시간 저혈압 예측을 직접 확인해보세요.</div>
        </div>
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-600 no-underline"
        >
          데모 요청하기 <FiArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

export default TargetMarket;
