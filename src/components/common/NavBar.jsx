// 상단 네비게이션바
import { FiActivity } from 'react-icons/fi';

const NAV_LINKS = [
  { href: '#problem', label: '문제' },
  { href: '#solution', label: '솔루션' },
  { href: '#value', label: '핵심 가치' },
  { href: '#market', label: '타겟 시장' },
];

function NavBar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2 text-base font-bold text-slate-900 no-underline">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <FiActivity size={16} />
          </span>
          SMS
        </a>

        <nav className="hidden flex-1 items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-500 no-underline hover:bg-slate-50 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#market"
          className="ml-auto shrink-0 whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white no-underline sm:ml-0"
        >
          데모 요청하기
        </a>
      </div>
    </header>
  );
}

export default NavBar;
