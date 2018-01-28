import { storiesOf } from '<%= storybook %>';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withTheme } from '<%= pathPrefix.split('/').map(v => '..').join('/') %>/themes';

import React from 'react';
import { Container } from './<%= fileName %>.styled';

storiesOf('<%= displayPrefix %>/<%= componentName %>/Styled/Container', module)
  .addDecorator(withKnobs)
<%- makeStyled ? "  .addDecorator(withTheme)\n" : "" -%>
  .add('basic usage', () => (
    <Container>
      {text('Content', 'Content')}
    </Container>
  ))
;
