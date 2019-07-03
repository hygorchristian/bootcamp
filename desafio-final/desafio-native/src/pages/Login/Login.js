import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import Snackbar from 'react-native-snackbar';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Background, Logo, Input, Button, ButtonText,
} from './styles';

import fundo from '../../assets/img/fundo.png';
import logo from '../../assets/img/logo.png';
import { AuthActions } from '../../store/ducks/auth';
import { showError } from '../../utils';
import {Loader, LoaderContainer} from "../Splash/styles";

class Login extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    loadAuthRequest: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps.auth;
    if (error) {
      showError(error);
    }
  }

  componentWillUpdate(nextProps) {
    const { auth } = nextProps;
    const { navigation: { replace } } = this.props;

    if (auth.isAuth) {
      replace('Home');
    }
  }

  login = () => {
    const { email, password } = this.state;
    const { loadAuthRequest } = this.props;
    if (email.length === 0) {
      showError('O email deve ser preenchido');
      return;
    }
    if (password.length === 0) {
      showError('A senha deve ser preenchida');
      return;
    }

    loadAuthRequest(email, password);
  };

  render() {
    const { navigation: { navigate }, auth } = this.props;
    const { email, password } = this.state;

    return (
      <Background
        source={fundo}
        resizeMode="cover"
      >
        <StatusBar barStyle="light-content" backgroundColor="#E5293E" />
        <Logo
          source={logo}
          resizeMode="contain"
        />
        <Input
          placeholder="Seu e-mail"
          autoCapitalize="none"
          value={email}
          onChangeText={state => this.setState({ email: state })}
        />
        <Input
          placeholder="Senha secreta"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={(state) => { this.setState({ password: state }); }}
        />
        {
          auth.loading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            <>
            <Button onPress={this.login}>
              <ButtonText>Entrar</ButtonText>
            </Button>
            <Button transparent onPress={() => navigate('SignUp')}>
          <ButtonText>Criar conta gratuita</ButtonText>
          </Button>
            </>
          )
        }

      </Background>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...AuthActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Login);
