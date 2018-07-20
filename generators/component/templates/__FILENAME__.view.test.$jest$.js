import React from 'react';
<%- renderTest ? `import { render } from '${renderTest}';` : `import ReactDOM from 'react-dom';` %>

import <%= componentName %> from './<%= fileName %>.view';

describe('<%= displayPrefix %>/<%= componentName %>', () => {

  it('works', () => {<%= renderTest ? '' : `
    const div = document.createElement('div');
` %>
    <%= renderTest ? 'render(' : 'ReactDOM.render((' %>
      <<%= componentName %>
        name="Ylem"
      />
    <%= renderTest ? ');' : `), div);

    ReactDOM.unmountComponentAtNode(div);` %>
  });

});
