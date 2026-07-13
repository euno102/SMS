// 랜딩페이지 컴포넌트
import NavBar from '../../components/common/NavBar';
import Footer from '../../components/common/Footer';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import CoreValue from './sections/CoreValue';
import TargetMarket from './sections/TargetMarket';

// 랜딩페이지 전체
function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <NavBar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
        <Hero />
        <Problem />
        <Solution />
        <CoreValue />
        <TargetMarket />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
