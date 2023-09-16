import { useLocation } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";
import {FiChevronsUp, FiDownload, FiCornerUpLeft} from 'react-icons/fi'

interface ClickIconProps {
  isHidden: boolean;
}

const Container = styled.div`
  position: relative;
  width:100%;
  height:100%;
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
const MessageDetailSection = () => {

  const location = useLocation();
  const randomImg = location.state?.image || '';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <BigImg src={randomImg} alt=""/>
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
          <ModalItem>
            <FiDownload />
            <ModalText>이미지 저장</ModalText>
          </ModalItem >
          <Line></Line>
          <ModalItem>
            <FiCornerUpLeft />
            <ModalText>뒤로 가기</ModalText>
          </ModalItem>
        </Modal>
      </ModalBox>
    </Container>
  )
}

export default MessageDetailSection;