import TodayDate from '../../components/TodayDate';
import FindMessage from '../../components/FindMessage';
import MenuSlider from '../../components/MenuSlider';
import styled from 'styled-components';

const HomeContent = styled.div`
  width: 100%;
`;

const HomeSection = () => {
  return (
    <HomeContent>
      <TodayDate />
      <FindMessage />
      <MenuSlider />
    </HomeContent>
  );
};

export default HomeSection;
