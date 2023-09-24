import React from 'react';
import { useNavigate } from 'react-router-dom';
import TodayDate from '../../components/TodayDate';
import FindMessage from '../../components/FindMessage';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import{ FiDownload, FiRefreshCcw, FiClipboard, FiMaximize2 } from 'react-icons/fi'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseApp";
import { useEffect, useState } from 'react';

interface BgDataProps {
  id: string;
  category: string;
  imgUrl: string;
  key: number;
}

const MessageSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedMenu = location.state.menuItem;
  const keyGroup = selectedMenu.keyGroup
  const [bgData, setBgData] = useState<BgDataProps[]>([]);
  const [imgUrl, setImgUrl] = useState('');
  console.log('넘겨받은 값', keyGroup)

  const generatedNumber = () => {
    let min, max;

    if (keyGroup === 10) {
      min = 1;
      max = 10;
    } else if (keyGroup === 20) {
      min = 11;
      max = 20;
    } else if (keyGroup === 30) {
      min = 21;
      max = 30;
    }
    if (min && max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  const randomKeyNum = generatedNumber()
  console.log('내가 뽑은 값', randomKeyNum)

  // Firebase Firestore에서 데이터를 가져오기
  const getBg = async () => {
    const datas = await getDocs(collection(db, "random-data"));
    
    // 데이터를 읽어와서 state 변수에 저장
    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      console.log('데이터',dataObj)
      setBgData((prev) => [...prev, dataObj as BgDataProps]);
    });
  };

  // 컴포넌트가 처음 렌더링될 때 데이터를 가져오도록 useEffect를 사용.
  useEffect(() => {
      getBg();
  }, []);

  const matchingObj = bgData.find((obj) => obj.key === randomKeyNum);

  useEffect(() => {
    if (matchingObj) {
      setImgUrl(matchingObj.imgUrl)
    } 
  },[matchingObj])

  const handleRandomWrappingClick = () => {
    navigate('/message-detail', {
      state: {
        image: imgUrl,
        key: matchingObj?.key
      }
    })

  }
  return (
    <Container>
      <TodayDate />
      <FindMessage isFound={false}/>
      <RandomWrapping onClick={handleRandomWrappingClick}>
        <RandomImg imgUrl={imgUrl} />
        <MaxIcon>
          <FiMaximize2 size='20'/>
        </MaxIcon>
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

const Container = styled.div`
  position: relative;
  width:100%;
  height:calc(100% - 6.2rem);
`
const RandomWrapping = styled.div`
  width: calc(100% - 6rem);
  height: calc(100vh - 22rem);
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
const RandomImg = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imgUrl});
  background-size: cover; 
  background-position: center; /* 이미지를 가운데 정렬 */
`

const MaxIcon = styled.div`
  position: absolute;
  top: 3%;
  right: 5%;
  z-index:2;
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
  cursor: pointer;
`
const BtnText = styled.p`
  font-size: 5px;
  text-align: center;
`
