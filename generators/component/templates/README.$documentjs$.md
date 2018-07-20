@parent <%= app %>
@module {React.Component} <%= displayPrefix %>/<%= componentName %> <<%= componentName %> />

<%= description || `A short description of the ${componentName} component.` %>

@signature `<<%= componentName %> />`

@body

## Use

```javascript
import React, { Component } from 'react';
import <%= componentName %> from '<%= pathPrefix.replace("src", "~") %>/<%= fileName %>';

export default class App extends Component {
  render () {
    return (
      <<%= componentName %> />
    );
  }
}
```
