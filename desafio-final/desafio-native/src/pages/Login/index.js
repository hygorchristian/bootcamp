import React from 'react';

import { StatusBar } from 'react-native';

import {
  Background, Logo, Input, Button, ButtonText,
} from './styles';

import fundo from '../../assets/img/fundo.png';
import logo from '../../assets/img/logo.png';

const Login = props => (
  <Background
    source={fundo}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" backgroundColor="#E5293E" />
    <Logo
      source={logo}
      resizeMode="contain"
    />
    <Input placeholder="Seu e-mail" />
    <Input placeholder="Senha secreta" secureTextEntry />
    <Button onPress={() => props.navigation.replace('Home')}>
      <ButtonText>Entrar</ButtonText>
    </Button>
    <Button transparent onPress={() => props.navigation.navigate('SignUp')}>
      <ButtonText>Criar conta gratuita</ButtonText>
    </Button>
  </Background>
);

export default Login;
