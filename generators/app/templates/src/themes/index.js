import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './primary';

export function withTheme(storyFn) {
  return (
    <ThemeProvider theme={theme}>
      { storyFn() }
    </ThemeProvider>
  );
}
