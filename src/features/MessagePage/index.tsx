import React from 'react';
import TodayDate from '../../components/TodayDate';
import FindMessage from '../../components/FindMessage';
import styled from 'styled-components';

const randomData = [
  {
    image: 'images/random1.jpg',
    message: '해보지/않고는/당신이/무엇을/해낼 수/있는지/알 수가/없다',
    authorship: '프랭클린 아담1'
  },
  {
    image: 'images/random2.jpg',
    message: '해보지 않고는/ 당신이 무엇을 /해낼 수 있는지 알 수가 없다',
    authorship: '프랭클린 아담2'
  },
  {
    image: 'images/random3.jpg',
    message: '해보지 않고는 /당신이 무엇을해낼 수 있는지 알 수가 없다',
    authorship: '프랭클린 아담3'
  }
]

let randomNum = Math.floor(Math.random() * randomData.length);
const randomArr = randomData[randomNum].message.split('/');

const RandomWrapping = styled.div`
  padding: 0 3rem;
  height: 45rem;
  overflow:hidden;
  position: relative;
`
const RandomImg = styled.img`
  width: 100%;
  height: 100%;
`
const RandomMessage = styled.p`
  width: 60%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  word-break: keep-all;
  font-size: 1.3rem;
`
const RandomAuthorship = styled.span`
  display: block;
  margin-top: 2rem;
`

const MessageSection = () => {
  return (
    <>
      <TodayDate />
      <FindMessage isFound={false}/>
      <RandomWrapping>
        <RandomImg src={randomData[randomNum].image} />
        <RandomMessage>
          {
            randomArr.map((el, i)=>(
              <React.Fragment key={i}>
                {el}
                <br />
              </React.Fragment>
            ))
          }
          <RandomAuthorship>{`${randomData[randomNum].authorship}`}</RandomAuthorship>
        </RandomMessage>
      </RandomWrapping>
    </>
  );
};

export default MessageSection;