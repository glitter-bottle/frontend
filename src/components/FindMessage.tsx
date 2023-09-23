import styled from 'styled-components';
import useAuth from '../hooks/useAuth';

const Content = styled.div``;
const Text = styled.p`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0;
`;

interface Props {
  isFound: boolean;
}

const FindMessage = ({ isFound }: Props) => {
  const user = useAuth();

  // user가 없을 때에는 닉네임을 'guest'로 설정
  const username = user?.displayName || 'guest';

  return (
    <>
      <Content>
        <Text>
          {isFound ? `${username}님을 위한 오늘의 문장을 찾아보세요.` : `${username}님을 위한 오늘의 문장을 찾았어요.`}
        </Text>
      </Content>
    </>
  );
};

export default FindMessage;
