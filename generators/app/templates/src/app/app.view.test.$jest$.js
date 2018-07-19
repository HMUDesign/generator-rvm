import React from 'react';
<%= renderTest ? `import { render } from '${renderTest}';` : `import ReactDOM from 'react-dom';` %>

import App from './app.view';

describe('App', () => {

  it('works', () => {<%= renderTest ? '' : `
    const div = document.createElement('div');
` %>
    <%= renderTest ? 'render(' : 'ReactDOM.render((' %>
      <App
        name="Ylem"
      />
    <%= renderTest ? ');' : `), div);

    ReactDOM.unmountComponentAtNode(div);` %>
  });

});
