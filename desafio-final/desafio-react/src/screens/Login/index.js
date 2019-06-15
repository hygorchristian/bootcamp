import React, { Component } from 'react';
import { withSnackbar } from 'notistack';
import CircularProgress from '@material-ui/core/CircularProgress';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { AuthActions } from '../../store/ducks/auth';

import {
 Container, Form, Logo, Input, LoginButton
} from './styles';
import logo from '../../assets/img/logo@3x.png';

class Login extends Component {
  static propTypes = {
    loadRequest: PropTypes.func.isRequired,
    enqueueSnackbar: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    Auth: PropTypes.shape({
      isAuth: PropTypes.bool,
      user: PropTypes.object,
      error: PropTypes.string,
      loading: PropTypes.bool
    }).isRequired
  }

  componentWillReceiveProps(nextProps) {
    const { enqueueSnackbar } = this.props;
    if (nextProps.Auth.error) {
      enqueueSnackbar(nextProps.Auth.error, { variant: 'error' });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { loadRequest } = this.props;

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    loadRequest(email, password);
  }

  render() {
    const { Auth, location } = this.props;

    if (Auth.isAuth) {
      return (
        <Redirect to={{
          pathname: '/',
          state: { from: location }
        }}
        />
      );
    }

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Logo src={logo} alt="Logo" />
          <Input placeholder="Seu e-mail" type="email" id="email" />
          <Input placeholder="Senha secreta" type="password" id="password" />
          <LoginButton>
            {Auth.loading ? (
              <CircularProgress size={20} color="#ffffff" />
            ) : (
              'Entrar'
            )}
          </LoginButton>

        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ Auth }) => ({
  Auth,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...AuthActions,
}, dispatch);


const withConnect = connect(mapStateToProps, mapDipatchToProps);

export default compose(withConnect, withSnackbar)(Login);
