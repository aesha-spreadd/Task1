// navbar.stories.js
import React from 'react';
import NavBar from '../NavBar';
import * as Styled from '../NavBarStyled';

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
        {/* Replace with an actual search icon */}
      </Styled.NavbarInputContainer>
    </Styled.NavbarLeft>
    <Styled.NavbarLinks>
      <Styled.NavbarList>
        <Styled.TextLink href="#">Home</Styled.TextLink>
        <Styled.IconAfterLink>🏠</Styled.IconAfterLink>{' '}
        {/* Replace with an actual home icon */}
      </Styled.NavbarList>
      <Styled.NavbarList>
        <Styled.TextLink href="#">About</Styled.TextLink>
        <Styled.IconAfterLink>ℹ️</Styled.IconAfterLink>{' '}
        {/* Replace with an actual info icon */}
      </Styled.NavbarList>
    </Styled.NavbarLinks>
  </Styled.NavbarContainer>
);
