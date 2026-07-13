//진입
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';

// 앱 전체
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
