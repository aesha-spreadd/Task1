// toast.js
import React from 'react';
import {
  ToastContainer,
  Toast,
  ToastText,
  ToastMainContainer,
} from './Toast.Styled';

const ToastComponent = ({ type, message }) => {
  return (
    <ToastMainContainer>
      <ToastContainer>
        <Toast className={type}>
          <ToastText type={type}>{message}</ToastText>
        </Toast>
      </ToastContainer>
    </ToastMainContainer>
  );
};

export default ToastComponent;
