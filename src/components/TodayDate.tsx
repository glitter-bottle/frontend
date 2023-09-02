import styled from "styled-components";

const Content = styled.div`
`
const Today = styled.p`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;
`

const TodayDate = () => {

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
  const date = today.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}/${month}/${date}`;

      return (
          <Content>
              <Today>{formattedDate}</Today>
          </Content>
      );
  }
  
  export default TodayDate;