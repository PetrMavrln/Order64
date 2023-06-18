import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './scss/App.css';

function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <AppRouter />
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
