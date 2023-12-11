// navbar.stories.js
import React from 'react';
import NavBar from '../NavBar';
import * as Styled from '../NavBarStyled';

// Import your SVG icons
import homeIcon from '../assets/home.png';
import infoIcon from '../assets/info.png';

export default {
  title: 'NavBar',
  component: NavBar,
};

export const Navbar = () => (
  <Styled.NavbarContainer>
    <Styled.NavbarLeft>
      <Styled.NavbarTitle href="/index.html" className="navbar-title">
        Adorn Box
      </Styled.NavbarTitle>
      <Styled.NavbarInputContainer>
        <Styled.NavbarInput
          type="text"
          className="navbar-input au-input"
          placeholder="Search"
        />
        <Styled.SearchIcon>🔍</Styled.SearchIcon>{' '}
      </Styled.NavbarInputContainer>
    </Styled.NavbarLeft>
    <Styled.NavbarLinks>
      <Styled.NavbarList>
        <Styled.TextLink href="#">
          Home <Styled.IconAfterLink></Styled.IconAfterLink>
        </Styled.TextLink>
      </Styled.NavbarList>
      <Styled.NavbarList>
        <Styled.TextLink href="#">
          About <Styled.IconAfterLink></Styled.IconAfterLink>
        </Styled.TextLink>
      </Styled.NavbarList>
      <Styled.NavbarList>
        <Styled.TextLink href="#">
          Contact <Styled.IconAfterLink></Styled.IconAfterLink>
        </Styled.TextLink>
      </Styled.NavbarList>
    </Styled.NavbarLinks>
  </Styled.NavbarContainer>
);
