import { storiesOf } from '<%= storybook %>';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import React from 'react';
import { <%= componentName %> } from './<%= fileName %>.styled';

storiesOf('<%= displayPrefix %>/<%= componentName %>', module)
  .addDecorator(withKnobs)
  .add('basic usage', () => (
    <<%= componentName %> onClick={action('clicked')}>
      {text('Content', 'Content')}
    </<%= componentName %>>
  ))
;
