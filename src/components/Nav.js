import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <NavWrapper show={show}>
      <div>홈화면</div>
      <div>내보틀</div>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  position: fixed;
  width: 50rem;
  top: 0;
  left: 50%;
  right: 0;
  height: 70px;
  transform: translateX(-50%);
  background-color: ${props => (props.show ? '#090b13' : 'transparent')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
