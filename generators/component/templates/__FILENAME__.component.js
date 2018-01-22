import { connect } from 'react-view-model';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ViewModel from './<%= fileName %>.viewmodel';
import { Container } from './<%= fileName %>.styled';

export class <%= componentName %> extends Component {
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
      <Container onClick={onClick}>
        {name}
      </Container>
    );
  }
}

export default connect(ViewModel)(<%= componentName %>);
