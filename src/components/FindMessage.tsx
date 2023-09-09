import styled from "styled-components"

const Content = styled.div`
`
const Text = styled.p`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 3.5rem;
`

interface Props {
  isFound: boolean
}

const FindMessage = ({isFound}:Props) => {
  const user = '한소희';

  return (
    <>
      <Content>
        <Text>
          {
            isFound ?  
              `${user}님을 위한 오늘의 문장을 찾아보세요.`
            : 
              `${user}님을 위한 오늘의 문장을 찾았어요.`
            
          }
        </Text>
      </Content>
    </>
  )
}

export default FindMessage