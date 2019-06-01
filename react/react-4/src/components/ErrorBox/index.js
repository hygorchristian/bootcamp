import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container } from './styles';
import { Creators as ErrorActions } from '../../store/ducks/error';

class ErrorBox extends Component {
  //
  state = {};

  render() {
    const { error: { message, visible }, hideError } = this.props;

    if (visible) {
      return (
        <Container>
          <p>{message}</p>
          <button type="button" onClick={hideError}>✖</button>
        </Container>
      );
    }

    return false;
  }
}

const mapStateToProps = ({ error }) => ({
  error
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
