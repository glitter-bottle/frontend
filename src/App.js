import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
// 우리꺼 추가
import HomePage from './pages/HomePage';

const Layout = () => {
  return (
    <LayoutWrap>
      <Nav />
      <Content></Content>
    </LayoutWrap>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          //로그인 페이지
          <Route index element={<LoginPage />} />
          <Route path="home" element={<HomePage />} />
          //원래 있던 파일
          <Route path="main" element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const LayoutWrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-position: top;
  background-image: url('/images/login-background.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  color: white;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 500px;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/mobile_background.gif');
`;
