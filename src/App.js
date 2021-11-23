import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import IntroducePage from './pages/IntroducePage';

function App() {
  return (
    <>
      <Route component={IntroducePage} path="/" exact />
    </>
  );
}

export default App;
