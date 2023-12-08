// src/styled.js
import styled from 'styled-components';

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

  ${(props) => {
    switch (props.color) {
      case 'primary':
        return 'background-color: red; color: white;';
      case 'secondary':
        return 'background-color: white; color: black; border: 1px solid black;';
      case 'success':
        return 'background-color: green; color: white;';
      case 'warning':
        return 'background-color: orange; color: white;';
      default:
        return '';
    }
  }}
`;
