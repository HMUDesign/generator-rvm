import { connect } from 'react-view-model';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ViewModel from './app.viewmodel';
<%- dependencies.styled ? "import { Container } from './app.styled';\n" : "" -%>

export class App extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  static rvmTypes = {
    id: PropTypes.string.isRequired,
  }

  render() {
    const { name, onClick } = this.props;

    return (
      <<%= dependencies.styled ? "Container" : "div" %> onClick={onClick}>
        {name}
      </<%= dependencies.styled ? "Container" : "div" %>>
    );
  }
}

export default connect(ViewModel)(App);
