
import styled from "styled-components"
import Header from "../components/Header"
import HomeSection from "../features/HomePage"


const Container = styled.div`
  width: 100%;  
`

const HomePage = () => {
  return (
    <>
      <Header />
        <Container>
          <HomeSection />
        </Container>
    </>
  )
}

export default HomePage

