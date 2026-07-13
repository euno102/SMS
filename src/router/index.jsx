// 라우터입니다
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../view/landing/LandingPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default AppRouter;
