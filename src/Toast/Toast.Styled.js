// toast.styled.js
import styled, { css } from 'styled-components';

export const baseStyles = css`
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
`;

export const toastStyles = css`
  ${baseStyles}
  display: block;
  width: 250px; /* Remove max-width */
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;

  &.success {
    border: 1px solid #4caf50;
  }

  &.warning {
    border: 1px solid #ff9800;
  }

  &.danger {
    border: 1px solid #f44336;
  }
`;

export const ToastMainContainer = styled.div`
  ${baseStyles}
  display: flex;
  flex-direction: row;
  justify-content: center; /* Adjust as needed */
`;

export const ToastContainer = styled.div`
  ${baseStyles}
`;

export const Toast = styled.div`
  ${toastStyles}
`;

export const ToastText = styled.p`
  ${baseStyles}
  color: ${({ type }) =>
    type === 'success'
      ? '#4caf50'
      : type === 'warning'
      ? '#ff9800'
      : '#f44336'};
`;
