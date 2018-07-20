import React from 'react';
import ReactDOM from 'react-dom';
<%- dependencies.router ? "import { BrowserRouter } from 'react-router-dom';\n" : "" -%>
<%- dependencies.styled ? "import { ThemeProvider } from 'styled-components';\n" : "" -%>
<%- dependencies.styled ? "import theme from './theme';\n" : "" -%>

import App from './app';
<% const first = dependencies.router ? "  " : ""; -%>
<% const second = dependencies.styled ? `${first}  ` : ""; -%>

ReactDOM.render((
<%- dependencies.router ? `${first}<BrowserRouter>\n` : "" -%>
<%- dependencies.styled ? `${second}<ThemeProvider theme={theme}>\n` : "" -%>
<%- second || first %>  <App id="1" />
<%- dependencies.styled ? `${second}</ThemeProvider>\n` : "" -%>
<%- dependencies.router ? `${first}</BrowserRouter>\n` : "" -%>
), document.getElementById('root'));
