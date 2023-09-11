import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const LayoutWrap = styled.main`
  width: 100%;
  // height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background-image: url('/images/web/web-background.png');
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;
const WebTitle = styled.div`
  position: fixed;
  top: 7.8125vw;
  left: 7.0313vw;
  img {
    width: 17.1354vw;
  }
  @media screen and (max-width: 625px) {
    display: none;
  }
`
const LogoImg = styled.div`
  position: fixed;
  bottom: -3vw;
  left: 0;
  img {
    width: 28vw;
  }
  @media screen and (max-width: 625px) {
    display: none;
  }
`
const MadeBy = styled.div`
  position: fixed;
  top: 7.8125vw;
  right: 5%;
  img {
    width: 8.4896vw;
  }
  @media screen and (max-width: 1000px) {
    img {
      width: 15vw;
    }
  }
  @media screen and (max-width: 625px) {
    display: none;
  }
`
const Container = styled.div`
  width: 375px;
  height: 100vh;
  position: relative;
  background-image: url('/images/mobile_background.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 20%;
  z-index: 1;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    margin: auto;
  }
`;

const Layout = () => {
  return (
    <>
      <LayoutWrap>
        <WebTitle>
          <img src='images/web/web-title.png' alt='' />
        </WebTitle>
        <MadeBy>
          <img src='images/web/web-members.png' alt='' />
        </MadeBy>
        <LogoImg>
          <img src='images/web/web-bottle.png' alt='' />
        </LogoImg>
        <Container>
          <Outlet />
        </Container>
      </LayoutWrap>
    </>
  );
};

export default Layout;
