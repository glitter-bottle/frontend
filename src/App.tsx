import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import GlobalStyle from './assets/styles/globalstyle';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import MessagePage from './pages/MessagePage';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/message" element={<MessagePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;