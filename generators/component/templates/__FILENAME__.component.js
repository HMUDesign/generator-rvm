import PropTypes from 'prop-types';
import React, { Component } from 'react';

<%- makeStyled ? `import { Container } from './${fileName}.styled';

` : "" -%>
export class <%= componentName %> extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  render() {
    const { name, onClick } = this.props;

    return (
      <<%= makeStyled ? "Container" : "div" %><%- dependencies.less ? ` className="${fileName}"` : "" -%> onClick={onClick}>
        {name}
      </<%= makeStyled ? "Container" : "div" %>>
    );
  }
}
