// 기본 렌더링 테스트
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SMS landing page hero', () => {
  render(<App />);
  const heading = screen.getByText(/AI 기반 수술 안전 예측 시스템/i);
  expect(heading).toBeInTheDocument();
});
