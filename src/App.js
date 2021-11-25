import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import IntroducePage from './pages/IntroducePage';
import { Helmet } from 'react-helmet-async';
function App() {
  return (
    <>
      <Helmet>
        <title>서호준- 포트폴리오</title>
      </Helmet>
      <Route component={IntroducePage} path="/" exact />
    </>
  );
}

export default App;
