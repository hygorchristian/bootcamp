import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import {
  Background, Logo, WelcomeMessage, Loader, LoaderContainer,
} from './styles';

import fundo from '../../assets/img/fundo.png';
import logo from '../../assets/img/logo.png';

class Splash extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { auth: { isAuth }, navigation: { replace } } = this.props;
    setTimeout(() => {
      if (isAuth) {
        replace('Home');
      } else {
        replace('Login');
      }
    }, 2500);
  }

  render() {
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
        <WelcomeMessage>Seja bem vindo :)</WelcomeMessage>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </Background>
    );
  }
}


const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Splash);
