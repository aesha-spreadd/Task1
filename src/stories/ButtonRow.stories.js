// ButtonRow.stories.js
import React from 'react';
import { ButtonRow } from '../ButtonRow';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

export default {
  title: 'ButtonRow',
  component: ButtonRow,
};

export const OutlinedButtons = () => (
  <ThemeProvider theme={theme}>
    <ButtonRow variant="outlined" />
  </ThemeProvider>
);

export const ContainedButtons = () => (
  <ThemeProvider theme={theme}>
    <ButtonRow variant="contained" />
  </ThemeProvider>
);
