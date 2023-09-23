import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import MybottleSection from '../features/MyBottlePage';

const MybottlePage = () => {
  const location = useLocation();
  const nickName = localStorage.getItem('nickName');

  if(nickName === null) {
    alert('💁‍♀️ 로그인 후 이용해주세요');
    window.location.href = '/';
  }
  return (
    <div>
      <Header />
      <Title>내 보틀에 담은 문장이에요</Title>
      <MybottleSection />
    </div>
  )
}




const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin: 2rem 0;
  font-weight: 500;
`

export default MybottlePage