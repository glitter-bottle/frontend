import React from 'react';
import { useNavigate } from 'react-router-dom';
import TodayDate from '../../components/TodayDate';
import FindMessage from '../../components/FindMessage';

import styled from 'styled-components';
import{ FiDownload, FiRefreshCcw, FiClipboard, FiMaximize2 } from 'react-icons/fi'

const randomData = [
  {
    image: 'images/random1.png',
    message: '당신은 움츠리기보다/활짝 피어나도록 만들어진 존재입니다',
    authorship: '오프라 윈프리'
  },
  {
    image: 'images/random2.png',
    message: '자신의 능력을 믿어야 한다./그리고 끝까지 굳세게 밀고 나가라',
    authorship: '로잘린 카터'
  },
  {
    image: 'images/random3.png',
    message: '행복의 한 쪽 문이 닫히면/다른 쪽 문이 열린다./그러나 흔히 우리는/닫혀진 문을 오랫동안 보기 때문에/우리를 위해 열려 있는 문을 보지 못한다.',
    authorship: '헬렌 켈러'
  }
]

let randomNum = Math.floor(Math.random() * randomData.length);
const randomArr = randomData[randomNum].message.split('/');

const Container = styled.div`
  position: relative;
  width:100%;
  height:calc(100% - 6.2rem);
`
const RandomWrapping = styled.div`
  width: calc(100% - 6rem);
  margin: 0 auto;
  overflow:hidden;
  position: relative;
  cursor: pointer;
  border-radius: 30px;
  &:hover svg {
    transition: transform 1s;
    transform: scale(1.2); 
  }
  &::before {
    content: "클릭하여 확대해서 보기";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #000;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: 1;
  }
  &:hover::before {
    opacity: 0.8; /* 호버 시 배경색이 서서히 나타나도록 설정 */
  }
`
const RandomImg = styled.img`
  width: 100%;
`
const MaxIcon = styled.div`
  position: absolute;
  top: 3%;
  right: 5%;
  z-index:2;
`
const RandomMessage = styled.p`
  width: 60%;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  word-break: keep-all;
  font-size: 1rem;
  text-align: center;
`
const RandomAuthorship = styled.span`
  display: block;
  margin-top: 2rem;
  padding: 0 3rem;
`
const BottomSection = styled.div`
  width: calc(100% - 6rem);
  position: absolute;
  bottom:0;
  left:50%;
  transform: translate(-50%, -50%);
`
const BottomBtnList = styled.ul`
  display: flex;
  justify-content: space-between;
`
const BttomBtn =styled.li`
  width:60px;
  height:60px;
  background-color:#3E3F49;
  margin: auto;
  border-radius: 20px;
`
const Link = styled.a`
  width:60px;
  height:60px;
  display: block;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: .3rem;
`
const BtnText = styled.p`
  font-size: 5px;
  text-align: center;
`

const MessageSection = () => {

  const navigate = useNavigate();

  const handleRandomWrappingClick = () => {
    navigate('/message-detail')
  }
  return (
    <Container>
      <TodayDate />
      <FindMessage isFound={false}/>
      <RandomWrapping onClick={handleRandomWrappingClick}>
        <RandomImg src={randomData[randomNum].image} />
        <MaxIcon>
          <FiMaximize2 size='20'/>
        </MaxIcon>
        <RandomMessage>
          {
            randomArr.map((el, i)=>(
              <React.Fragment key={i}>
                {el}
                <br />
              </React.Fragment>
            ))
          }
          <RandomAuthorship>
            {`${randomData[randomNum].authorship}`}
          </RandomAuthorship>
        </RandomMessage>
      </RandomWrapping>
      <BottomSection>
        <BottomBtnList>
          <BttomBtn>
            <Link href='/home'>
              <FiRefreshCcw size='27'/>
            </Link>
            <BtnText>다른 문장</BtnText>
          </BttomBtn>
          <BttomBtn>
            <Link>
              <FiDownload size='27'/>
            </Link>
            <BtnText>이미지 저장</BtnText>
          </BttomBtn>
          <BttomBtn>
            <Link>
              <FiClipboard size='27'/>
            </Link>
            <BtnText>이 문장 담기</BtnText>
          </BttomBtn>
        </BottomBtnList>
      </BottomSection>
    </Container>
  );
};

export default MessageSection;