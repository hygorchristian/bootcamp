import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import lodash from 'lodash';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import {
  Container, Background, Toolbar, Button, ToolbarTitle, ToolbarPrice,
  ItemsList, ItemContainer, Image, Title, ButtonDelete, Info, Size, Price,
  BottomMenu, ButtonCart, ButtonContainer, ButtonText,
} from './styles';

import fundo from '../../assets/img/header-background.png';
import Status from '../../components/Status';
import { CarrinhoActions } from '../../store/ducks/carrinho';
import { getFile } from '../../services/api';

class Cart extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    carrinho: PropTypes.object.isRequired,
  }


  renderItem = ({ item: { produto, tamanho } }) => {
    const { removeItem } = this.props;
    const remover = () => {
      const { id } = tamanho.pivot;
      removeItem(id);
    };

    return (
      <ItemContainer>
        <Image source={{ uri: getFile(produto.file) }} />
        <Info>
          <Title>{produto.nome}</Title>
          <Size>Tamanho: {tamanho.descricao}</Size>
          <Price>{currencyFormatter.format(tamanho.pivot.valor, { code: 'BRL' })}</Price>
        </Info>
        <ButtonDelete onPress={remover}>
          <Icon name="delete-forever" size={24} color="#E5293E" />
        </ButtonDelete>
      </ItemContainer>
    );
  }

  render() {
    const { navigation: { pop, push, replace }, carrinho } = this.props;
    const produtos = lodash.values(carrinho.produtos);
    console.tron.log(produtos);

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
            <ToolbarTitle>Carrinho</ToolbarTitle>
            <ToolbarPrice>{currencyFormatter.format(carrinho.valor, { code: 'BRL' })}</ToolbarPrice>
          </Toolbar>
          <ItemsList
            data={produtos}
            keyExtractor={item => String(item.tamanho.pivot.id)}
            renderItem={this.renderItem}
            ListEmptyComponent={() => (
              <ItemContainer>
                <Info>
                  <Title>O seu carrinho está vazio</Title>
                </Info>
              </ItemContainer>
            )}
            ListFooterComponent={() => (
              <BottomMenu>
                <ButtonCart onPress={() => replace('Home')}>
                  <Icon name="add-shopping-cart" size={24} color="#666666" />
                </ButtonCart>
                <ButtonContainer onPress={() => push('Checkout')}>
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


const mapStateToProps = ({ carrinho }) => ({
  carrinho,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...CarrinhoActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Cart);
