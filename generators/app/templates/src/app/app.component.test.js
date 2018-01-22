import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app.component';

describe('App', () => {

  it('works', () => {
    const div = document.createElement('div');
    ReactDOM.render((
      <App
        name="ReactViewModel"
      />
    ), div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
