import { storiesOf } from '<%= storybook %>';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';

import React from 'react';
import <%= componentName %>RVM, { <%= componentName %> } from './<%= fileName %>.component';

storiesOf('<%= displayPrefix %>/<%= componentName %>RVM', module)
  .add('basic usage', () => (
    <<%= componentName %>RVM id={text('ID', '1')} onClick={action('clicked')} />
  ))
;

storiesOf('<%= displayPrefix %>/<%= componentName %>', module)
  .add('basic usage', () => (
    <<%= componentName %>
      name={text('Name', 'ReactViewModel')}
      onClick={action('clicked')}
    />
  ))
;
