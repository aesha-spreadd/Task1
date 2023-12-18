import styled, { css } from 'styled-components';
import theme from '../theme'; // Make sure this import is correct

export const commonInputStyles = `
  background-color: ${theme.badgeText};
  border: 1px solid ${theme.inputBorder};
  border-radius: 5px;
  color: ${theme.textLinkColor};
  cursor: text;
  display: block;
  font: 400 18px Arial;
  height: 21px;
  margin: 10px 0;
  min-width: 510px;
  padding: 8px 14px;
  transition: all 0.3s ease;
  width: 510px;
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
  width: 540px;
  color: ${theme.primary};
`;

export const Input = styled.input`
  ${commonInputStyles}

  ${({ type }) =>
    type === 'password' &&
    css`
      border-color: ${theme.primary};
      box-shadow: 0 0 5px ${theme.primary};
    `}
`;
export const InputError = styled.span`
  color: ${theme.primary};
  font-size: 15px;
`;
