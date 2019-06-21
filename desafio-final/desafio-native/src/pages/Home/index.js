import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Background, Toolbar, Button, ToolbarTitle, Cart, Bag, Notification,
  ItemsList, ItemContainer, Image, Info, Title, Description, Time, TimeText,
} from './styles';

import fundo from '../../assets/img/header-background.png';
import bag from '../../assets/img/bag.png';

class Home extends React.Component {
  renderItem = ({ item }) => (
    <ItemContainer>
      <Image />
      <Info>
        <Title>Pizzas</Title>
        <Description>Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome</Description>
        <Time>
          <Icon name="access-alarm" size={12} color="#d8d8d8" />
          <TimeText>30 min</TimeText>
        </Time>
      </Info>
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
              <Icon name="history" color="#ffffff" size={24} />
            </Button>
            <ToolbarTitle>Pizzaria Don Juan</ToolbarTitle>
            <Cart>
              <Notification notifications />
              <Bag source={bag} />
            </Cart>
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

export default Home;
