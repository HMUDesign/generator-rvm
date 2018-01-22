import { storiesOf } from '<%= storybook %>';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import React from 'react';
import { Container } from './<%= fileName %>.styled';

storiesOf('<%= displayPrefix %>/<%= componentName %>/Styled/Container', module)
  .addDecorator(withKnobs)
  .add('basic usage', () => (
    <Container>
      {text('Content', 'Content')}
    </Container>
  ))
;
