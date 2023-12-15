import styled from 'styled-components';
import theme from '../theme';

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
  margin: 0;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

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
  font-size: 6px;
  height: 40px;
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

export const ToastSuccess = styled.div`
  ${commonToastStyles}
  border: 1px solid ${theme.successColor};
`;

export const ToastDanger = styled.div`
  ${commonToastStyles}
  border: 1px solid rgb(244, 67, 54);
`;

export const ToastWarning = styled.div`
  ${commonToastStyles}
  border: 1px solid ${theme.secondaryColor};
`;

export const ToastText = styled.p`
  ${baseStyles}
  font-size: 15px;
  color: ${theme.successColor};
  width: 250px;
  display: block;
  height: 18px;
  margin: 0;
  padding: 0;
`;

export const ToastTextD = styled.p`
  ${baseStyles}
  font-size: 15px;
  color: rgb(211, 22, 9);
  width: 250px;
  display: block;
  height: 18px;
  margin: 0;
  padding: 0;
`;

export const ToastTextW = styled.p`
  ${baseStyles}
  font-size: 15px;
  color: ${theme.secondaryColor};
  width: 250px;
  display: block;
  height: 18px;
  margin: 0;
  padding: 0;
`;
