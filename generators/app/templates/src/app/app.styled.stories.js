import { storiesOf } from 'starwars/storybook';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import React from 'react';
import { Container } from './app.styled';

storiesOf('App/Styled/Container', module)
  .addDecorator(withKnobs)
  .add('basic usage', () => (
    <Container>
      {text('Content', 'Content')}
    </Container>
  ))
;
