// MyComponent.stories.js
import React from 'react';
import Toast from './Toast'; // Update the import path if needed
import { ToastContainer } from './Toast.Styled';

export default {
  title: 'Toasts',
  component: Toast,
};

export const Examples = () => (
  <>
    <ToastContainer>
      <Toast type="success" text="Successful toast for user action." />
      <Toast type="warning" text="Warning toast for user action." />
      <Toast type="danger" text="Danger toast for user action." />
    </ToastContainer>
  </>
);
