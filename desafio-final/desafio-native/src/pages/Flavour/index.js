import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Background, Toolbar, Button, ToolbarTitle,
  ItemsList, ItemContainer, Image, Title,
} from './styles';

import fundo from '../../assets/img/header-background.png';
import bag from '../../assets/img/bag.png';

class Flavour extends React.Component {
  renderItem = ({ item }) => (
    <ItemContainer>
      <Image />
      <Title>Pizzas</Title>
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
            <ToolbarTitle>Selecione um tipo</ToolbarTitle>
          </Toolbar>
          <ItemsList
            numColumns={2}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        </Container>
      </>
    );
  }
}

export default Flavour;
