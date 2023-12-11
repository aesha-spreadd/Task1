import styled, { css } from 'styled-components';

export const ButtonRowContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: transparent;
  }

  ${(props) =>
    props.color &&
    css`
      &:hover {
        background-color: ${props.color};
        color: white;
      }
    `}

  &:active {
    background-color: ${(props) => (props.color ? props.color : 'transparent')};
    color: white;
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background-color: transparent;
      border: 1px solid ${props.color || 'black'};
      color: ${props.color || 'black'};
    `}

  ${(props) =>
    props.variant === 'floating' &&
    css`
      position: relative;
      z-index: 1;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    `}

  ${(props) =>
    props.color === 'primary' &&
    css`
      border-color: #ec8f5e;
      color: #ec8f5e;

      &:hover,
      &:active {
        background-color: #ec8f5e;
        color: white;
      }
    `}

  ${(props) =>
    props.color === 'warning' &&
    css`
      border-color: #f3b664;
      color: #f3b664;

      &:hover,
      &:active {
        background-color: #f3b664;
        color: white;
      }
    `}

  ${(props) =>
    props.color === 'success' &&
    css`
      border-color: #f1eb90;
      color: #f1eb90;

      &:hover,
      &:active {
        background-color: #f1eb90;
        color: white;
      }
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      border-color: #9fbb73;
      color: #9fbb73;

      &:hover,
      &:active {
        background-color: #9fbb73;
        color: white;
      }
    `}
`;
