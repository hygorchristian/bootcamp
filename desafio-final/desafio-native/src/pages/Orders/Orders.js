import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Background, Toolbar, Button, ToolbarTitle, ItemContainer, Info,
  Title, Description, Price, OrderStatus, ItemsList,
} from './styles';
import Status from '../../components/Status';

import fundo from '../../assets/img/header-background.png';

class Orders extends React.Component {
  renderItem = ({ item }) => (
    <ItemContainer>
      <Info>
        <Title>Pedido #3</Title>
        <Description>Ontem às 17h</Description>
        <Price>R$ 42,00</Price>
      </Info>
      <OrderStatus>
        Pronto
      </OrderStatus>
    </ItemContainer>
  )

  render() {
    const { navigation: { pop } } = this.props;
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
            <ToolbarTitle>Meus pedidos</ToolbarTitle>
          </Toolbar>
          <ItemsList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        </Container>
      </>
    );
  }
}

export default Orders;
