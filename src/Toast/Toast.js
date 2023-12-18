// MyComponent.js
import React from 'react';
import {
  ToastContainer,
  ToastSuccess,
  ToastDanger,
  ToastWarning,
  ToastText,
  ToastTextD,
  ToastTextW,
} from './Toast.Styled';

const Toast = ({ type, text }) => {
  switch (type) {
    case 'success':
      return (
        <ToastSuccess>
          <ToastText>{text}</ToastText>
        </ToastSuccess>
      );

    case 'warning':
      return (
        <ToastWarning>
          <ToastTextW>{text}</ToastTextW>
        </ToastWarning>
      );

    case 'danger':
      return (
        <ToastDanger>
          <ToastTextD>{text}</ToastTextD>
        </ToastDanger>
      );

    default:
      return null;
  }
};

export default Toast;
