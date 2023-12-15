import styled, { css } from 'styled-components';
import theme from '../theme'; // Make sure this import is correct

export const commonInputStyles = `
  background-color: ${theme.badgeText};
  border-bottom-color: ${theme.inputBorder};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color:${theme.inputBorder};
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
  color: ${theme.textLinkColor};
  cursor: text;
  display: block;
  font-family: Arial;
  font-feature-settings: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-size: 18px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-alternates: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-variant-position: normal;
  font-variation-settings: normal;
  font-weight: 400;
  height: 21px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 10px;
  min-width: 510px;
  padding-block-end: 8px;
  padding-block-start: 8px;
  padding-bottom: 8px;
  padding-inline-end: 14px;
  padding-inline-start: 14px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 8px;
  text-align: start;
  text-indent: 0;
  text-rendering: auto;
  text-shadow: none;
  text-transform: none;
  transition-behavior: normal;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
  width: 510px;
  word-spacing: 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  column-gap: 10px;
  flex-wrap: wrap;
  font-family: 'Rubik', sans-serif;
  font-size: 6px;
  height: 182px;
  justify-content: center;
  margin: 0;
  padding: 15px 50px;
  row-gap: 10px;
  width: 904px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
  height: 77px;
  margin: 0;
  padding: 0;
  width: 540px;
`;

export const Label = styled.label`
  cursor: default;
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  height: 18px;
  margin: 0;
  padding: 0;
  width: 540px;
`;

export const LabelP = styled.label`
  cursor: default;
  display: block;
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  height: 18px;
  margin: 0;
  padding: 0;
  width: 540px;
  color: ${theme.primary};
`;

export const Input = styled.input`
  ${commonInputStyles}

  ${({ type }) =>
    type === 'password' &&
    css`
      border-color: ${theme.primary}; // Add the primary color as border color
      box-shadow: 0 0 5px ${theme.primary}; // Add a box shadow with the primary color
    `}
`;
export const InputError = styled.span`
  color: ${theme.primary};
  font-size: 15px;
`;
