// 핵심 가치
import { FiUserCheck, FiHeart, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import { coreValues } from '../../../data/content';

const ICONS = [FiUserCheck, FiTrendingUp];
const SUB_ICONS = [FiHeart, FiDollarSign];

function CoreValue() {
  return (
    <section id="value" className="py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{coreValues.label}</span>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{coreValues.titleKo}</h2>
        <p className="text-sm leading-relaxed text-slate-500">{coreValues.bodyEn}</p>
        <p className="text-base leading-relaxed text-slate-700">{coreValues.bodyKo}</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {coreValues.cards.map((card, i) => {
          const Icon = ICONS[i];
          const SubIcon = SUB_ICONS[i];
          return (
            <div key={card.audience} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon size={20} />
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">{card.audience}</div>
              <div className="mt-1 text-lg font-bold text-slate-900">{card.titleKo}</div>
              <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                <SubIcon className="mt-0.5 shrink-0 text-blue-500" size={14} />
                {card.bodyKo}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CoreValue;
