import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";
import {FiChevronsUp, FiDownload, FiCornerUpLeft} from 'react-icons/fi'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseApp";
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { AiFillCheckCircle } from 'react-icons/ai'

interface ClickIconProps {
  isHidden: boolean;
}

interface BgDataProps {
  id: string;
  category: string;
  imgUrl: string;
  key: number;
}

const MessageDetailSection = () => {

  const location = useLocation();
  const randomKey = location.state?.key || 0;
  const [bgData, setBgData] = useState<BgDataProps[]>([]);
  const [imgUrl, setImgUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  const navigate = useNavigate();

    // Firebase Firestore에서 데이터를 가져오기
    const getBg = async () => {
      const datas = await getDocs(collection(db, "random-data"));
      
      // 데이터를 읽어와서 state 변수에 저장
      datas?.forEach((doc) => {
        const dataObj = { ...doc.data(), id: doc.id };

        setBgData((prev) => [...prev, dataObj as BgDataProps]);
      });
    };
  
    // 컴포넌트가 처음 렌더링될 때 데이터를 가져오도록 useEffect를 사용.
    useEffect(() => {
        getBg();
    }, []);

    const matchingObj = bgData.find((obj) => obj.key ===randomKey );

    useEffect(() => {
      if (matchingObj) {
        setImgUrl(matchingObj.imgUrl)
      } 
    },[matchingObj])

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleDownloadImage = (event:React.MouseEvent) => {
    event.preventDefault(); 

    saveAs(imgUrl, 'your-image.jpg');

    // 이미지 저장이 완료되면 메시지를 표시하고 2초 후 숨깁니다.
    setShowDownloadMessage(true);

    // 이미지 저장 후 모달을 닫습니다.
    setIsModalOpen(false);

    setTimeout(() => {
      setShowDownloadMessage(false);
      handleGoBack()
    }, 2000);

  };

  const handleGoBack = () => {
    // 이전 페이지로 이동
    navigate(-1); 
  };

  return (
    <Container>
      <BigImg src={imgUrl} alt=""/>
      <ClickIcon onClick={handleOpenModal} isHidden={isModalOpen} >
        <Btn>
          <ClickText>
            Click!
          </ClickText>
          <FiChevronsUp />
        </Btn>
      </ClickIcon>
      <ModalBox style={{ bottom: isModalOpen ? '0' : '-150px' }}>
        <Modal>
          <ModalItem onClick={handleDownloadImage}>
            <FiDownload />
            <ModalText>
              이미지 저장
            </ModalText>
          </ModalItem >
          <Line></Line>
          <ModalItem onClick={handleGoBack}>
            <FiCornerUpLeft />
            <ModalText>뒤로 가기</ModalText>
          </ModalItem>
        </Modal>
      </ModalBox>
      {
        showDownloadMessage && 
        <DownloadMessage>
          <AiFillCheckCircle /> 이미지가 저장되었습니다.
        </DownloadMessage>}
    </Container>
  )
}

export default MessageDetailSection;

const Container = styled.div`
  width:100%;
  height:100%;
  position:relative;
`
const BigImg = styled.img`
  width: 100%;
  height:100%;
`
const ClickIcon = styled.div<ClickIconProps>`
  position: absolute; 
  bottom: 0;
  left:50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;;
  opacity: ${(props) => (props.isHidden ? "0" : "1")};
  &:hover {
    transform: translate(-50%, -70%); 
  }
`
const Btn = styled.button`
  color: #fff;
`
const ClickText =styled.p`
  font-size: 14px;
`
const ModalBox = styled.div`
  position: absolute; 
  bottom: -150px;
  width: 100%;
  height: 150px;
  border-radius: 30px 30px 0 0;
  background-color:#16161F; 
  transition: bottom .8s ease-in-out;
`
const Modal = styled.ul`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const ModalItem = styled.li`
  margin: auto 0;
  font-size: 14px;
  cursor:pointer;
`
const ModalText = styled.p`
  display: inline-block;
  padding-left: 10px;
`
const Line = styled.div`
  border-top: 1px dashed #fff;
`
const DownloadMessage = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  font-size: 10px;
`