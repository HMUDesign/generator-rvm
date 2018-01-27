import { storiesOf } from '<%= storybook %>';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
<%- dependencies.styled ? "import { withTheme } from '../themes';\n" : "" -%>

import React from 'react';
import AppRVM, { App } from './app.component';

storiesOf('AppRVM', module)
  .addDecorator(withKnobs)
<%- dependencies.styled ? "  .addDecorator(withTheme)\n" : "" -%>
  .add('basic usage', () => (
    <AppRVM id={text('ID', '1')} onClick={action('clicked')} />
  ))
;

storiesOf('App', module)
  .addDecorator(withKnobs)
<%- dependencies.styled ? "  .addDecorator(withTheme)\n" : "" -%>
  .add('basic usage', () => (
    <App
      name={text('Name', 'ReactViewModel')}
      onClick={action('clicked')}
    />
  ))
;
