// toast.stories.js
import React from 'react';
import Toast from './Toast';

export default {
  title: 'Toast',
};

const toastMessages = {
  success: 'Successful toast for user action.',
  warning: 'Warning toast for user action.',
  danger: 'Danger toast for user action.',
};

export const ToastExamples = () => (
  <>
    <Toast type="success" message={toastMessages.success} />
    <Toast type="warning" message={toastMessages.warning} />
    <Toast type="danger" message={toastMessages.danger} />
  </>
);
