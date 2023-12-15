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

export const Toast = () => {
  return (
    <ToastContainer>
      <ToastSuccess>
        <ToastText>Successful toast for user action.</ToastText>
      </ToastSuccess>

      <ToastWarning>
        <ToastTextW>Warning toast for user action.</ToastTextW>
      </ToastWarning>

      <ToastDanger>
        <ToastTextD>Danger toast for user action.</ToastTextD>
      </ToastDanger>
    </ToastContainer>
  );
};
