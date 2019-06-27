import React from 'react';

import { StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Background, Toolbar, Button, ToolbarTitle, ToolbarPrice,
  BottomMenu, ButtonContainer, ButtonText, Form, TextArea,
  Row, Input,
} from './styles';
import Status from '../../components/Status';

import fundo from '../../assets/img/header-background.png';

class Checkout extends React.Component {
  render() {
    const { navigation: { pop, dispatch } } = this.props;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'Orders' }),
      ],
    });
    return (
      <>
        <Background
          source={fundo}
          resizeMode="stretch"
        />
        <Container>
          <StatusBar barStyle="light-content" backgroundColor="#0B2031" />
          <Status />
          <Toolbar>
            <Button onPress={() => pop()}>
              <Icon name="arrow-back" color="#ffffff" size={24} />
            </Button>
            <ToolbarTitle>Realizar Pedido</ToolbarTitle>
            <ToolbarPrice>R$ 107,00</ToolbarPrice>
          </Toolbar>
          <Form>
            <TextArea placeholder="Alguma observação?" />
            <Row>
              <Input placeholder="Qual o seu CEP?" />
            </Row>
            <Row>
              <Input placeholder="Rua" />
              <Input marginLeft={12} width={95} placeholder="Nº" />
            </Row>
            <Row>
              <Input placeholder="Bairro" />
            </Row>
          </Form>
          <BottomMenu>
            <ButtonContainer onPress={() => { dispatch(resetAction); }}>
              <ButtonText>REALIZAR PEDIDO</ButtonText>
              <Icon name="chevron-right" size={24} color="#ffffff" />
            </ButtonContainer>
          </BottomMenu>
        </Container>
      </>
    );
  }
}

export default Checkout;
