<%- dependencies.jest ?
`import React from 'react';
import ReactDOM from 'react-dom';

import { ${componentName} } from './${fileName}.component';

describe('${displayPrefix}/${componentName}', () => {

  it('works', () => {
    const div = document.createElement('div');

    ReactDOM.render((
      <${componentName}
        name="ReactViewModel"
      />
    ), div);

    ReactDOM.unmountComponentAtNode(div);
  });

});
` : '' -%>
<%- dependencies.qunit ?
`import QUnit from '${dependencies.steal ? 'steal-qunit' : 'qunit'}';
import React from 'react';
import ReactDOM from 'react-dom';

import { ${componentName} } from './${fileName}.component';

QUnit.module('${displayPrefix}/${componentName}');

QUnit.test('works', () => {
  const div = document.createElement('div');

  const instance = ReactDOM.render((
    <${componentName}
      name="ReactViewModel"
    />
  ), div);

  assert.ok(instance);

  ReactDOM.unmountComponentAtNode(div);
});
` : '' -%>
