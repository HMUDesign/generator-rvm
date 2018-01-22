import React from 'react';
import ReactDOM from 'react-dom';

import { <%= componentName %> } from './<%= fileName %>.component';

describe('<%= displayPrefix %>/<%= componentName %>', () => {

  it('works', () => {
    const div = document.createElement('div');
    ReactDOM.render((
      <<%= componentName %>
        name="ReactViewModel"
      />
    ), div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
