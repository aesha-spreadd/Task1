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
  //width: 624px;
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
  appearance: auto;
  background-color: ${theme.textColor};
  border-bottom-color: ${theme.inputBorder};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: ${theme.inputBorder};
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: ${theme.inputBorder};
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: ${theme.inputBorder};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: ${theme.textLinkColors};
  cursor: text;
  display: block;
  font-family: Arial;
  font-feature-settings: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-size: 18px;
  font-stretch: 100%;
  font-weight: 400;
  height: 21px;
  letter-spacing: normal;
  line-height: normal;
  min-width: auto;
  padding-block-end: 8px;
  padding-block-start: 8px;
  padding-bottom: 8px;
  padding-inline-end: 14px;
  padding-inline-start: 14px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 8px;
  text-align: start;
  text-indent: 0px;
  text-rendering: auto;
  transition-behavior: normal;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
  width: 187.5px;
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  -webkit-rtl-ordering: logical;
  -webkit-border-image: none;
`;

export const StyledButton = styled.button`
  align-items: flex-start;
  appearance: auto;
  background-color: ${theme.textColor};
  border-bottom-color: ${theme.inputBorder};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: ${theme.inputBorder};
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: ${theme.inputBorder};
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: ${theme.inputBorder};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  color: ${theme.inputBorder};
  cursor: pointer;
  display: block;
  font-family: Arial;
  font-feature-settings: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-size: 14px;
  font-stretch: 100%;
  font-weight: 600;
  height: 40px;
  letter-spacing: normal;
  line-height: normal;
  list-style-image: none;
  list-style-position: outside;
  padding-block-end: 11px;
  padding-block-start: 11px;
  padding-bottom: 11px;
  padding-inline-end: 28px;
  padding-inline-start: 28px;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 11px;
  text-align: center;
  text-indent: 0px;
  text-rendering: auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.navbarHover};
  }

  width: 96.1016px;
  word-spacing: 0px;
  -webkit-border-image: none;
`;

export const BadgeContainer = styled.div`
  display: block;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 45.5px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  position: relative;
  text-align: left;
  width: 44px;
`;

export const BadgeCount = styled.div`
  align-items: center;
  margin-top: 2px;
  margin-right: -25px;
  background-color: ${theme.horizontalTitle};
  border-bottom-color: ${theme.textColor};
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: ${theme.textColor};
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: ${theme.textColor};
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: ${theme.textColor};
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-top-style: solid;
  border-top-width: 2px;
  color: ${theme.textColor};
  display: flex;
  font-family: Rubik, sans-serif;
  font-size: 10px;
  height: 18px;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -8px;
  width: 18px;
`;

export const NavbarText = styled.p`
  display: flex;
  align-items: center;
  color: ${theme.inputBorder};
  cursor: pointer;
  margin-left: 90px;
  margin-top: -45px;
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 24px;
  line-height: 24px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  text-align: left;
  text-decoration-color: ${theme.inputBorder};
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  width: 35.4141px;
`;
export const BadgeIcon = styled.img`
  margin-left: -70px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: inline;
  font-family: Rubik, sans-serif;
  font-size: 6px;
  height: 44px;
  padding-bottom: 10px;
  padding-left: 90px;
  text-align: left;
  width: 44px;
  position: relative;
`;
