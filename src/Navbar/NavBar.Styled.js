import styled from 'styled-components';
import theme from '../theme';

export const NavbarMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.cardMain};
  border-radius: 5px;
  padding: 15px 50px;
  width: 900px;
`;

export const NavbarContainer = styled.div`
  background-color: ${theme.CardMain};
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 35px;
  padding: 20px 10px;
  width: 1000px;
`;

export const NavbarContainerWith = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 35px;
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 45.5px;
`;

export const NavbarList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 18px;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 40px;
`;

export const NavbarTitle = styled.p`
  color: ${theme.horizontalTitle};
  cursor: pointer;
  font-family: Rubik, sans-serif;
  font-size: 28px;
  font-weight: 600;
  text-decoration-color: ${theme.horizontalTitle};
  transition: all 0.3s ease;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  margin-left: 160px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Rubik, sans-serif;
  font-size: 24px;
`;

export const StyledInput = styled.input`
  background-color: ${theme.textColor};
  border: 1px solid ${theme.inputBorder};
  border-radius: 5px;
  color: ${theme.textLinkColors};
  cursor: text;
  display: block;
  font: 400 18px Arial;
  height: 21px;
  margin: 8px 0;
  min-width: auto;
  padding: 8px 14px;
  text-align: start;
  transition: all 0.3s ease;
  width: 187.5px;
  writing-mode: horizontal-tb;
`;

export const StyledButton = styled.button`
  background-color: ${theme.textColor};
  border: 1px solid ${theme.inputBorder};
  border-radius: 2px;
  box-sizing: border-box;
  color: ${theme.inputBorder};
  cursor: pointer;
  display: block;
  font: 600 14px Arial;
  height: 40px;
  line-height: normal;
  padding: 11px 28px;
  text-align: center;
  text-rendering: auto;
  transition: background-color 0.3s ease;
  width: 96.1016px;
  word-spacing: 0px;

  &:hover {
    background-color: ${theme.navbarHover};
  }
`;

export const BadgeContainer = styled.div`
  font: 6px Rubik, sans-serif;
  height: 45.5px;
  position: relative;
  text-align: left;
  width: 44px;
`;

export const BadgeCount = styled.div`
  align-items: center;
  background-color: ${theme.horizontalTitle};
  border-radius: 50%;
  border: 2px solid ${theme.textColor};
  color: ${theme.textColor};
  display: flex;
  font: 10px Rubik, sans-serif;
  height: 18px;
  justify-content: center;
  position: absolute;
  right: 0;
  right: -24px;
  top: 4px;
  width: 18px;
`;

export const NavbarText = styled.h1`
  align-items: center;
  color: ${theme.inputBorder};
  cursor: pointer;
  font: 40px 1200 Rubik, sans-serif;
  height: 24px;
  line-height: 24px;
  margin-left: 90px;
  margin-top: -45px;
  text-align: left;
  text-decoration: ${theme.inputBorder} none solid;
  width: 35.4141px;
`;

export const BadgeIcon = styled.img`
  border-radius: 5px;
  display: inline;
  font: 6px Rubik, sans-serif;
  height: 44px;
  margin-left: -70px;
  padding: 10px 0 0 90px;
  position: relative;
  text-align: left;
  width: 44px;
`;
