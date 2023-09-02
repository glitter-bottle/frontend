import styled from 'styled-components';
import { CiHome } from 'react-icons/ci';

const Base = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
const Navigation = styled.nav`
  width: 100%;
`;
const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Menu = styled.li``;
const Link = styled.a``;
const MenuButton = styled.button`
  color: #fff;
`;
const MenuTitle = styled.span`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 0.8rem;
  display: block;
`;
const BottleButton = styled.img`
  width: 3rem;
`;

const Header = () => {
  return (
    <Base>
      <Navigation>
        <MenuList>
          <Menu>
            <Link href='/home'>
              <MenuButton>
                <CiHome size='35' />
                <MenuTitle>홈 화면</MenuTitle>
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link href='/'>
              <MenuButton>
                <BottleButton src='images/bottle_logo.png' alt='' />
                <MenuTitle>내 보틀</MenuTitle>
              </MenuButton>
            </Link>
          </Menu>
        </MenuList>
      </Navigation>
    </Base>
  );
};

export default Header;
