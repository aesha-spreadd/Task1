// Import necessary libraries and theme
import styled from 'styled-components';
import theme from '../theme';

// Define base styles
export const baseStyles = `
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
`;

// Common styles for all toast types
export const commonToastStyles = `
  ${baseStyles}
  display: block;
  max-width: 250px;
  width: 250px;
  height: 18px;
  font-size: 24px;
  background-color: ${theme.textColor};
  margin: 0;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

// Define the ToastContainer component with props
export const ToastContainer = styled.div`
  ${baseStyles}
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  font-size: ${(props) => props.fontSize || '6px'};
  height: ${(props) => props.containerHeight || '40px'};
  justify-content: center;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  row-gap: 10px;
  width: 904px;
`;

// Styled components for different toast types
export const ToastSuccess = styled.div`
  ${commonToastStyles}
  border: 1px solid ${(props) => props.borderColor || theme.successColor};
`;

export const ToastDanger = styled.div`
  ${commonToastStyles}
  border: 1px solid ${(props) => props.borderColor || 'rgb(244, 67, 54)'};
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
  margin: 0;
  padding: 0;
`;

export const ToastTextD = styled.p`
  ${baseStyles}
  font-size: ${(props) => props.fontSize || '15px'};
  color: ${(props) => props.textColor || 'rgb(211, 22, 9)'};
  width: 250px;
  display: block;
  height: 18px;
  margin: 0;
  padding: 0;
`;

export const ToastTextW = styled.p`
  ${baseStyles}
  font-size: ${(props) => props.fontSize || '15px'};
  color: ${(props) => props.textColor || theme.secondaryColor};
  width: 250px;
  display: block;
  height: 18px;
  margin: 0;
  padding: 0;
`;
