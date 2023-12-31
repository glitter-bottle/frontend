import React from "react";
import TodayDate from '../../components/TodayDate';
import FindMessage from '../../components/FindMessage';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const menuData = [
  {
    imgSrc: 'images/home/home_healing_message.png',
    title: '힐링 메시지',
    subtitle: 'healing message',
    keyGroup: 10,
  },
  {
    imgSrc: 'images/home/home_life_quotes.png',
    title: '명언',
    subtitle: 'life quotes',
    keyGroup: 20,
  },
  {
    imgSrc: 'images/home/home_positive_affirmation.png',
    title: '긍정 확언',
    subtitle: 'positive affirmation',
    keyGroup: 30,
  },
]

interface Props {
  settings?: Settings;
}

const HomeSection = ({ settings = DEFAULT_SETTINGS }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <TodayDate />
      <FindMessage isFound={true}/>
      <ReactSlider {...settings} className='slider' >
        {menuData.map((menuItem, index) => (
          <Menu 
            key={index} 
            onClick={()=>{
              let min = 1;
              let max = 10;
              
              if (menuItem.keyGroup === 10) {
                min = 1;
                max = 10;
              } else if (menuItem.keyGroup === 20) {
                min = 11;
                max = 20;
              } else if (menuItem.keyGroup === 30) {
                min = 21;
                max = 30;
              }
              const randomKeyNum = Math.floor(Math.random() * (max - min + 1)) + min;

            navigate('/message', 
            { state: { randomKeyNum } });
          }}>
            <MenuImg src={menuItem.imgSrc} alt={`${menuItem.title}의 이미지`} />
            <MenuTitle>{menuItem.title}<MenuSubtitle>{menuItem.subtitle}</MenuSubtitle></MenuTitle>
          </Menu>
        ))}
      </ReactSlider>
    </>
  );
};

export default HomeSection;


const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  z-index: 1;
  top: 45%;
  ${({ pos }) =>
    pos === 'left'
      ? css`
          left: 1.7rem;
          transform: translate(-50%, -50%);
        `
      : css`
          right: 1.7rem;
          transform: translate(50%, -50%);
        `};
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    color: #000;
  }
`

const ReactSlider = styled(Slider)`
.slick-slide {
  padding-top: 2.5rem;
  margin-bottom: 1.6rem;
}
.slick-slide img {
  transform:scale(.85);
  transition:transform .5s linear;
}
.slick-center {
  transform:scale(1.2);
  transition:transform .5s linear;
}
.slick-dots > li {
  width:auto;
  height:auto;
  margin:0 .2rem;
}
.slick-dots > li > button {
  width:100%;
  height:100%;
  border:1px solid #fff;;
  border-radius:4rem;
  box-sizing:border-box;
  display:block;
  position:relative;
}
.slick-dots > li > button::before {
  content:"";
  width:100%;
  height:100%;
  border-radius:4rem;
  background-color:#fff;
  opacity:0;
  transition:opacity .8s;
}
.slick-dots > li.slick-active > button::before {
  opacity:1;
}
.slick-dots > li:hover > button::before {
  opacity:1;
}
`
const Menu = styled.a`
  position: relative;
`
const MenuImg = styled.img`
  width: 100%;
`
const MenuTitle = styled.p`
  position: absolute;
  top:40%;
  left: 50%; 
  transform: translate(-50%);
  font-size: 1.4rem;
  color: #fff;
  text-align:center;
`
const MenuSubtitle = styled.span`
  display: block;
  font-size: 1rem;
`
const DEFAULT_SETTINGS: Settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  draggable: true,
  className: 'center',
  centerMode: true,
  centerPadding: '60px',
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  prevArrow: (
    <ArrowButton pos='left'>
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton pos='right'>
      <MdArrowForwardIos />
    </ArrowButton>
  ),
};