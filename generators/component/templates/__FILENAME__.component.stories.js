import { storiesOf } from '<%= storybook %>';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
<%- makeStyled ? `import { withTheme } from '${pathPrefix.split('/').map(v => '..').join('/')}/themes';\n` : "" -%>

import React from 'react';
import { <%= componentName %> } from './<%= fileName %>.component';

storiesOf('<%= displayPrefix %>/<%= componentName %>', module)
  .addDecorator(withKnobs)
<%- makeStyled ? "  .addDecorator(withTheme)\n" : "" -%>
  .add('basic usage', () => (
    <<%= componentName %>
      name={text('Name', 'ReactViewModel')}
      onClick={action('clicked')}
    />
  ))
;
