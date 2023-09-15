import styled from 'styled-components';
import { FiHome } from 'react-icons/fi';

const Base = styled.header`
  width: 100%;
  height: 6.2rem;
  display: flex;
  align-items: center;
  padding: 0 2.9rem;
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
  font-size: .8rem;
  display: block;
`;
const BottleButton = styled.img`
  height: 2.1rem;
  margin-bottom: .41rem;
`;

const Header = () => {
  return (
    <Base>
      <Navigation>
        <MenuList>
          <Menu>
            <Link href='/home'>
              <MenuButton>
                <FiHome size='27' />
                <MenuTitle>홈 화면</MenuTitle>
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link href='/'>
              <MenuButton>
                <BottleButton src='images/header/header-logo.png' alt='' />
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
