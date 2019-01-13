import React from 'react';
<%- renderTest ? `import { render } from '${renderTest}';` : `import ReactDOM from 'react-dom';` %>
import { expect } from 'chai';

import <%= componentName %> from './<%= fileName %><%= onlyView ? "" : ".view" %>';

describe('<%= displayPrefix %>/<%= componentName %>', () => {

  it('works', () => {<%- renderTest ? '' : `
    const div = document.createElement('div');
` %>
    <%= renderTest ? 'const instance = render(' : 'ReactDOM.render((' %>
      <<%= componentName %>
        name="Ylem"
      />
    <%= renderTest ? `);

    expect(instance.type).to.equal(${componentName});` : `), div);

    ReactDOM.unmountComponentAtNode(div);` %>
  });

});
