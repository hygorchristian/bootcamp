import React from 'react';

import { StatusBar } from 'react-native';

import {
  Background, Logo, Input, Button, ButtonText,
} from './styles';

import fundo from '../../assets/img/fundo.png';
import logo from '../../assets/img/logo.png';

const SignUp = () => (
  <Background
    source={fundo}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" backgroundColor="#E5293E" />
    <Logo
      source={logo}
      resizeMode="contain"
    />
    <Input placeholder="Nome completo" />
    <Input placeholder="Seu e-mail" />
    <Input placeholder="Senha secreta" secureTextEntry />
    <Button>
      <ButtonText>Criar conta</ButtonText>
    </Button>
    <Button transparent>
      <ButtonText>Já tenho login</ButtonText>
    </Button>
  </Background>
);

export default SignUp;
