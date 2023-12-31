import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { MdLogout, MdLogin } from "react-icons/md";
import { auth } from "../firebaseApp";
import { signOut } from "firebase/auth";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const user = useAuth();

    const handleLogout = async () => {
        if (user) {
            await signOut(auth);
            localStorage.removeItem("nickName");
        }
    };

    return (
        <Base>
            <Navigation>
                <MenuList>
                    <Menu>
                        <Link to="/home">
                            <MenuButton>
                                <FiHome size="24" />
                                <MenuTitle>홈 화면</MenuTitle>
                            </MenuButton>
                        </Link>
                    </Menu>
                    {user ? (
                        location.pathname === "/mybottle" ? (
                            <Menu>
                                <Link onClick={handleLogout} to="/">
                                    <MenuButton>
                                        <MdLogout size="24" />
                                        <MenuTitle>로그아웃</MenuTitle>
                                    </MenuButton>
                                </Link>
                            </Menu>
                        ) : (
                            <Menu>
                                <Link to="/mybottle">
                                    <MenuButton>
                                        <BottleButton
                                            src="images/logo_header.png"
                                            alt="logo"
                                        />
                                        <MenuTitle>내 보틀</MenuTitle>
                                    </MenuButton>
                                </Link>
                            </Menu>
                        )
                    ) : (
                        <Menu>
                            <Link to="/">
                                <MenuButton>
                                    <MdLogin size="24"/>
                                    <MenuTitle>로그인</MenuTitle>
                                </MenuButton>
                            </Link>
                        </Menu>
                    )}
                </MenuList>
            </Navigation>
        </Base>
    );
};

export default Header;

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
    align-items: flex-end;
`;
const Menu = styled.li``;

const MenuButton = styled.button`
    color: #fff;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const MenuTitle = styled.span`
    font-family: Pretendard;
    font-weight: 400;
    font-size: 1rem;
    display: block;
`;
const BottleButton = styled.img`
    height: 2.4rem;
    // margin-bottom: 0.41rem;
`;