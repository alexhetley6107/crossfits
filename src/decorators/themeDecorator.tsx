import { GlobalStyle } from '@/themes';
import { theme } from '@/themes/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeDecorator = (Story: React.FC) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};
