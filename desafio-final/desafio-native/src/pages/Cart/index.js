import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Background, Toolbar, Button, ToolbarTitle, ToolbarPrice,
  ItemsList, ItemContainer, Image, Title, ButtonDelete, Info, Size, Price,
  BottomMenu, ButtonCart, ButtonContainer, ButtonText,
} from './styles';

import fundo from '../../assets/img/header-background.png';

class Cart extends React.Component {
  renderItem = ({ item }) => (
    <ItemContainer>
      <Image />
      <Info>
        <Title>Pizza Calabresa</Title>
        <Size>Tamanho: Médio</Size>
        <Price>R$ 29,90</Price>
      </Info>
      <ButtonDelete>
        <Icon name="delete-forever" size={24} color="#E5293E" />
      </ButtonDelete>
    </ItemContainer>
  )

  render() {
    return (
      <>
        <Background
          source={fundo}
          resizeMode="stretch"
        />
        <Container>
          <StatusBar barStyle="light-content" backgroundColor="#0B2031" />
          <Toolbar>
            <Button>
              <Icon name="arrow-back" color="#ffffff" size={24} />
            </Button>
            <ToolbarTitle>Carrinho</ToolbarTitle>
            <ToolbarPrice>R$ 107,00</ToolbarPrice>
          </Toolbar>
          <ItemsList
            data={[1, 2, 3]}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
            ListFooterComponent={() => (
              <BottomMenu>
                <ButtonCart>
                  <Icon name="add-shopping-cart" size={24} color="#666666" />
                </ButtonCart>
                <ButtonContainer>
                  <ButtonText>REALIZAR PEDIDO</ButtonText>
                  <Icon name="chevron-right" size={24} color="#ffffff" />
                </ButtonContainer>
              </BottomMenu>
            )}
          />
        </Container>
      </>
    );
  }
}

export default Cart;
