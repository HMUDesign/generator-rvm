import PropTypes from 'prop-types';
import React, { Component } from 'react';

<%- makeStyled ? `import { Container } from './${fileName}.styled';

` : "" -%>
export class <%= componentName %> extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }
<%- makeViewModel ? `
  static rvmTypes = {
    id: PropTypes.string.isRequired,
  }
` : "" -%>

  render() {
    const { name, onClick } = this.props;

    return (
      <<%= makeStyled ? "Container" : "div" %> onClick={onClick}>
        {name}
      </<%= makeStyled ? "Container" : "div" %>>
    );
  }
}
