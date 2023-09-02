import styled from "styled-components"

const Content = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
`
const Text = styled.p`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;
`

const FindMessage = () => {
  const user = '한소희';
  const isFound = true; 

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