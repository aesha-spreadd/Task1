// navbar.js
import React from 'react';
import * as Styled from './NavBarStyled';

const NavBar = ({ children }) => (
  <nav className="navbar example-navbar navbar-background-light">
    <Styled.NavbarContainer>{children}</Styled.NavbarContainer>
  </nav>
);

export default NavBar;
