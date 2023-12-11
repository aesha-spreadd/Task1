// styled.js
import styled, { css } from 'styled-components';
import theme from './theme'; // Update the path accordingly

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
        background-color: ${theme[props.color]};
        color: white;
      }
    `}

  &:active {
    background-color: ${(props) =>
      props.color ? theme[props.color] : 'transparent'};
    color: white;
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background-color: transparent;
      border: 1px solid ${props.color ? theme[props.color] : 'black'};
      color: ${props.color ? theme[props.color] : 'black'};
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
      border-color: ${theme.primary};
      color: ${theme.primary};

      &:hover,
      &:active {
        background-color: ${theme.primary};
        color: white;
      }
    `}

  ${(props) =>
    props.color === 'warning' &&
    css`
      border-color: ${theme.warning};
      color: ${theme.warning};

      &:hover,
      &:active {
        background-color: ${theme.warning};
        color: white;
      }
    `}

  ${(props) =>
    props.color === 'success' &&
    css`
      border-color: ${theme.success};
      color: ${theme.success};

      &:hover,
      &:active {
        background-color: ${theme.success};
        color: white;
      }
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      border-color: ${theme.secondary};
      color: ${theme.secondary};

      &:hover,
      &:active {
        background-color: ${theme.secondary};
        color: white;
      }
    `}
`;
