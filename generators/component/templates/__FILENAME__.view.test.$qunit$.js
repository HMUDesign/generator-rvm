import React from 'react';
<%= renderTest ? `import { render } from '${renderTest}';` : `import ReactDOM from 'react-dom';` %>
import QUnit from '<%= dependencies.steal ? 'steal-qunit' : 'qunit' %>';

import <%= componentName %> from './<%= fileName %><%= onlyView ? "" : ".view" %>';

QUnit.module('App', () => {

  QUnit.test('works', (assert) => {<%- renderTest ? '' : `
    const div = document.createElement('div');
` %>
    <%= renderTest ? 'const instance = render(' : 'ReactDOM.render((' %>
      <<%= componentName %>
        name="Ylem"
      />
    <%= renderTest ? `);

    assert.ok(instance.type === ${componentName});` : `), div);

    ReactDOM.unmountComponentAtNode(div);` %>
  });

});
