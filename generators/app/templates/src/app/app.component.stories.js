import { storiesOf } from '<%= storybook %>';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import { ThemeProvider } from 'styled-components';
import theme from '../themes/primary';

import React from 'react';
import AppRVM, { App } from './app.component';

function addTheme(storyFn) {
  return (
    <ThemeProvider theme={theme}>
      { storyFn() }
    </ThemeProvider>
  );
}

storiesOf('AppRVM', module)
  .addDecorator(addTheme)
  .add('basic usage', () => (
    <AppRVM id={text('ID', '1')} onClick={action('clicked')} />
  ))
;

storiesOf('App', module)
  .addDecorator(addTheme)
  .add('basic usage', () => (
    <App
      name={text('Name', 'ReactViewModel')}
      onClick={action('clicked')}
    />
  ))
;
