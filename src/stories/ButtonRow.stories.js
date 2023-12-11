// ButtonRow.stories.js
import React from 'react';
import { ButtonRow } from '../ButtonRow';
import { ThemeProvider } from 'styled-components'; // Add this import
import theme from '../theme'; // Update the path accordingly

export default {
  title: 'ButtonRow',
  component: ButtonRow,
};

export const FourButtons = () => (
  <ThemeProvider theme={theme}>
    <ButtonRow />
  </ThemeProvider>
);
