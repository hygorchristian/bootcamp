import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Background, Logo, Input, Button, ButtonText,
} from './styles';

import fundo from '../../assets/img/fundo.png';
import logo from '../../assets/img/logo.png';
import { UserActions } from '../../store/ducks/user';
import { showError, showSuccess } from '../../utils';
import {Loader, LoaderContainer} from "../Splash/styles";

class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    loadUserRequest: PropTypes.func.isRequired,
  }

  state = {
    nome: '',
    email: '',
    password: '',
  }

  componentWillReceiveProps(nextProps) {
    const { error, user } = nextProps.user;
    const { navigation: { pop } } = this.props;
    if (error) {
      showError(error);
    }

    if (user) {
      showSuccess('Usuário criado com sucesso!');
      pop();
    }
  }

  signUp = () => {
    const { nome, email, password } = this.state;
    const { loadUserRequest } = this.props;

    if (nome.length === 0) {
      showError('O campo nome deve ser preenchido');
      return;
    }
    if (email.length === 0) {
      showError('O campo email deve ser preenchido');
      return;
    }
    if (password.length === 0) {
      showError('O campo senha deve ser preenchido');
      return;
    }

    loadUserRequest(nome, email, password);
  }

  render() {
    const { nome, email, password } = this.state;
    const { navigation: { pop }, user } = this.props;

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
          placeholder="Nome completo"
          autoCapitalize="none"
          value={nome}
          onChangeText={(state) => { this.setState({ nome: state }); }}
        />
        <Input
          placeholder="Seu e-mail"
          autoCapitalize="none"
          value={email}
          onChangeText={(state) => { this.setState({ email: state }); }}
        />
        <Input
          placeholder="Senha secreta"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={(state) => { this.setState({ password: state }); }}
        />
        {
          user.loading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            <>
              <Button onPress={this.signUp}>
                <ButtonText>Criar conta</ButtonText>
              </Button>
              <Button transparent onPress={() => pop()}>
                <ButtonText>Já tenho login</ButtonText>
              </Button>
            </>
          )
        }

      </Background>
    );
  }
}


const mapStateToProps = ({ user }) => ({
  user,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...UserActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(SignUp);
