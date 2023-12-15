import React from 'react';

import {
  NavbarMainContainer,
  NavbarContainer,
  NavbarContainerWith,
  NavbarTitle,
  NavbarContent,
  InputContainer,
  StyledInput,
  NavbarLinks,
  NavbarList,
  StyledButton,
  BadgeContainer,
  BadgeCount,
  NavbarText,
  BadgeIcon,
} from './NavBar.Styled';

export const NavBar = () => {
  return (
    <NavbarMainContainer>
      <NavbarContainerWith>
        <NavbarTitle>Adorn Box</NavbarTitle>
        <NavbarContent>
          <InputContainer>
            <StyledInput
              type="text"
              className="navbar-input au-input"
              placeholder="search"
            />
          </InputContainer>
          <NavbarLinks>
            <NavbarList>
              <StyledButton>Login</StyledButton>
            </NavbarList>
            <NavbarList>
              <BadgeContainer>
                <BadgeIcon src="https://adorn-components.netlify.app/assets/images/heartIcon.svg" />
                <BadgeCount>1</BadgeCount>
              </BadgeContainer>
            </NavbarList>
            <NavbarList>
              <BadgeContainer>
                <BadgeIcon src="https://adorn-components.netlify.app/assets/images/cart-outlined.svg" />
                <BadgeCount>2</BadgeCount>
                <NavbarText>Cart</NavbarText>
              </BadgeContainer>
            </NavbarList>
          </NavbarLinks>
        </NavbarContent>
      </NavbarContainerWith>
    </NavbarMainContainer>
  );
};
