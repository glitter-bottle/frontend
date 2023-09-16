import styled from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebassApp';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user && user.displayName) {
        localStorage.setItem('nickName', user.displayName);
      }
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>
        <TitleImg src='images/logo_title.png' alt='Glitter Bottle' />
      </Title>
      <LogoImg src='images/logo.png' alt='로고' />
      <LoginButton onClick={handleGoogleLogin}>구글로 로그인</LoginButton>
      <HomeLink to='/home'>로그인 없이 구경하기</HomeLink>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  /* Remove 'order' property here */
`;

const TitleImg = styled.img`
  width: 27.7rem;
`;

const LogoImg = styled.img`
  width: 12.5rem;
  margin: 8.8rem 0;
`;

const LoginButton = styled.button`
  width: 27.7rem;
  height: 5rem;
  line-height: 5rem;
  border-radius: 5rem;
  margin-bottom: 4rem;
  color: #1e3050;
  text-align: center;
  background: #fff url('images/google.png') no-repeat 1rem / 3.3rem;
`;

const HomeLink = styled(NavLink)`
  color: #fff;
  opacity: 70%;
  text-decoration: underline;
`;
