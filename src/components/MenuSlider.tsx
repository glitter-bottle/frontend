
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import styled from 'styled-components'
import { css } from 'styled-components'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

interface Props {
  settings?: Settings;
}

const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  padding: 16px;
  border-radius: 50%;
  z-index: 1;
  top: 40%;
  ${({ pos }) => pos === 'left' ? css`left: 0; transform: translate(-50%, -50%)` : css`right: 0; transform: translate(50%, -50%)`};
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    color: #fff;
  }
`;

const DEFAULT_SETTINGS: Settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  draggable: true,
  prevArrow: (
    <ArrowButton pos="left">
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton pos="right">
      <MdArrowForwardIos />
    </ArrowButton>
  )
};
const Content = styled.div`
  width: 100%
`
const ReactSlider = styled(Slider)`
  .slick-track {
    
  }
`

const MenuSlider = ({ settings = DEFAULT_SETTINGS }:Props) => {

  return (
    <Content>
      <ReactSlider {...settings}>
        <div>
          <img src="image/home_healing _message.png" alt="" />
          <p>111</p>
        </div>
        <div>
          <img src="image/home_life_quotes.png" alt="" />
          <p>222</p>
        </div>
        <div>
          <img src="image/home_positive_affirmation.png" alt="" />
          <p>333</p>
        </div>
      </ReactSlider>
    </Content>
  )
  }

export default MenuSlider;