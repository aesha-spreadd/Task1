// src/styled.js
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
      border-color: red;
      color: red;

      &:hover,
      &:active {
        background-color: red;
        color: white;
      }
    `}

  ${(props) =>
    props.color === 'warning' &&
    css`
      border-color: orange;
      color: orange;

      &:hover,
      &:active {
        background-color: orange;
        color: white;
      }
    `}

  ${(props) =>
    props.color === 'success' &&
    css`
      border-color: green;
      color: green;

      &:hover,
      &:active {
        background-color: green;
        color: white;
      }
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      border-color: grey;
      color: grey;

      &:hover,
      &:active {
        background-color: grey;
        color: white;
      }
    `}
`;
