import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const LayoutWrap = styled.main`
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

const Container = styled.div`
  margin-bottom: 10vw;
  width: 500px;
  position: relative;
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('/images/mobile_background.gif');
`;

const Layout = () => {
  return (
    <>
      <LayoutWrap>
        <Container>
          <Outlet />
        </Container>
      </LayoutWrap>
    </>
  );
};

export default Layout;
