<%- dependencies.jest ?
`import React from 'react';
${renderTest ? `import { render } from '${renderTest}';` : `import ReactDOM from 'react-dom';`}

import ${componentName} from './${fileName}.component';

describe('${displayPrefix}/${componentName}', () => {

  it('works', () => {${renderTest ? '' : `
    const div = document.createElement('div');
`}
    ${renderTest ? 'render(' : 'ReactDOM.render(('}
      <${componentName}
        name="ReactViewModel"
      />
    ${renderTest ? ');' : `), div);

    ReactDOM.unmountComponentAtNode(div);`}
  });

});
` : '' -%>
<%- dependencies.qunit ?
`import QUnit from '${dependencies.steal ? 'steal-qunit' : 'qunit'}';
import React from 'react';
${renderTest ? `import { render } from '${renderTest}';` : `import ReactDOM from 'react-dom';`}

import ${componentName} from './${fileName}.component';

QUnit.module('${displayPrefix}/${componentName}', () => {

  QUnit.test('works', (assert) => {${renderTest ? '' : `
    const div = document.createElement('div');
`}
    const instance = ${renderTest ? 'render(' : 'ReactDOM.render(('}
      <${componentName}
        name="ReactViewModel"
      />
    ${renderTest ? ');' : `), div);`}

    assert.ok(instance);${renderTest ? '' : `

    ReactDOM.unmountComponentAtNode(div);`}
  });

});
` : '' -%>
