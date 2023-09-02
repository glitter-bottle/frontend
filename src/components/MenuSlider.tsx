import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';
import { css } from 'styled-components';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

interface Props {
  settings?: Settings;
}

const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  padding: 18px;
  border-radius: 50%;
  z-index: 1;
  top: 40%;
  ${({ pos }) =>
    pos === 'left'
      ? css`
          left: 2rem;
          transform: translate(-50%, -50%);
        `
      : css`
          right: 2rem;
          transform: translate(50%, -50%);
        `};
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
  slidesToShow: 2.5,
  slidesToScroll: 1,
  swipe: true,
  draggable: true,
  className: 'center',
  centerMode: true,
  centerPadding: '60px',
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
const Content = styled.div`
  width: 100%;
`;
const ReactSlider = styled(Slider)`
  align-items: center;

  img {
    width: 100%;
  }

  .slick-center > div > div > img {
  }
`;

const MenuSlider = ({ settings = DEFAULT_SETTINGS }: Props) => {
  return (
    <Content>
      <ReactSlider {...settings} className='slider' autoplay speed={1000} infinite pauseOnHover>
        <div>
          <img src='images/home_healing_message.png' alt='이미지1' />
          <p>축하합니다</p>
        </div>
        <div>
          <img src='images/home_life_quotes.png' alt='이미지2' />
          <p>이것이 바로</p>
        </div>
        <div>
          <img src='images/home_positive_affirmation.png' alt='이미지3' />
          <p>돼!</p>
        </div>
      </ReactSlider>
    </Content>
  );
};

export default MenuSlider;
