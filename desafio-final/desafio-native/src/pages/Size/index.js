import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CarrinhoActions } from '../../store/ducks/carrinho';

import {
  Container, Background, Toolbar, Button, ToolbarTitle,
  ItemsList, ItemContainer, Image, Title, Price,
} from './styles';

import fundo from '../../assets/img/header-background.png';
import Status from '../../components/Status';

class Size extends React.Component {
  renderItem = ({ item }) => {
    const { navigation: { push }, setTamanho } = this.props;
    const press = () => {
      setTamanho(item);
      push('Cart');
    };

    return (
      <ItemContainer onPress={press}>
        <Image />
        <Title>{item.descricao}</Title>
        <Price>R$ {item.pivot.valor}</Price>
      </ItemContainer>
    );
  }

  render() {
    const { navigation: { pop }, carrinho: { produto } } = this.props;
    return (
      <>
        <Background source={fundo} resizeMode="stretch" />
        <Container>
          <StatusBar barStyle="light-content" backgroundColor="#0B2031" />
          <Status />
          <Toolbar>
            <Button onPress={() => pop()}>
              <Icon name="arrow-back" color="#ffffff" size={24} />
            </Button>
            <ToolbarTitle>Carrinho</ToolbarTitle>
          </Toolbar>
          <ItemsList
            numColumns={2}
            data={produto.tamanhos}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ carrinho }) => ({
  carrinho,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...CarrinhoActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Size);
