import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app.view';

describe('App', () => {

  it('works', () => {
    const div = document.createElement('div');
    ReactDOM.render((
      <App
        name="Ylem"
      />
    ), div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
