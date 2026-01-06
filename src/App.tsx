import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { useTheme } from './hooks/useTheme';
import { ScrollToTop } from './components/common/ScrollToTop';

function App() {
  useTheme();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
