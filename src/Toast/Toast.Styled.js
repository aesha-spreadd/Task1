// Import necessary libraries and theme
import styled from 'styled-components';
import theme from '../theme';

// Define base styles
export const baseStyles = `
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
`;

export const commonToastStyles = `
  ${baseStyles}
  display: block;
  max-width: 250px;
  width: 250px;
  height: 18px;
  font-size: 24px;
  background-color: ${theme.textColor};
  padding: 10px;
  border-radius: 5px;
`;

export const ToastContainer = styled.div`
  ${baseStyles}
  align-items: center;
  border-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-size: ${(props) => props.fontSize || '6px'};
  height: ${(props) => props.containerHeight || '40px'};
  justify-content: center;
  padding: 15px 50px;
  row-gap: 10px;
  width: 904px;
`;

export const ToastSuccess = styled.div`
  ${commonToastStyles}
  border: 1px solid ${(props) => props.borderColor || theme.successColor};
`;

export const ToastDanger = styled.div`
  ${commonToastStyles}
  border: 1px solid ${(props) => props.borderColor || theme.toastTextD};
`;

export const ToastWarning = styled.div`
  ${commonToastStyles}
  border: 1px solid ${(props) => props.borderColor || theme.secondaryColor};
`;

// Styled components for text within the toast
export const ToastText = styled.p`
  ${baseStyles}
  font-size: ${(props) => props.fontSize || '15px'};
  color: ${(props) => props.textColor || theme.successColor};
  width: 250px;
  display: block;
  height: 18px;
`;

export const ToastTextD = styled.p`
  ${baseStyles}
  font-size: ${(props) => props.fontSize || '15px'};
  color: ${(props) => props.textColor || theme.toastTextD};
  width: 250px;
  display: block;
  height: 18px;
`;

export const ToastTextW = styled.p`
  ${baseStyles}
  font-size: ${(props) => props.fontSize || '15px'};
  color: ${(props) => props.textColor || theme.secondaryColor};
  width: 250px;
  display: block;
  height: 18px;
`;
