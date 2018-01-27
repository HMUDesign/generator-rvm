import { storiesOf } from '<%= storybook %>';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withTheme } from '../themes';

import React from 'react';
import { Container } from './app.styled';

storiesOf('App/Styled/Container', module)
  .addDecorator(withKnobs)
  .addDecorator(withTheme)
  .add('basic usage', () => (
    <Container>
      {text('Content', 'Content')}
    </Container>
  ))
;
