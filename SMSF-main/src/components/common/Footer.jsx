// 하단
import { FiActivity } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-slate-500 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-semibold text-slate-700">
          <FiActivity size={16} className="text-blue-600" />
          SMS · AI Surgical Safety Platform
        </div>
        <p>수술 중 저혈압으로 인한 사망률 예측 모델 · B2B 병원 대상 서비스</p>
        <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} SMS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
