import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { CarrinhoActions } from '../../store/ducks/carrinho';

import {
  Container, Background, Toolbar, Button, ToolbarTitle,
  ItemsList, ItemContainer, Title, Price,
} from './styles';

import fundo from '../../assets/img/header-background.png';
import Status from '../../components/Status';
import SizeImage from '../../components/SizeImage';

class Size extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
  }

  renderItem = ({ item }) => {
    const { navigation: { push, state }, addItem } = this.props;
    const { produto } = state.params;
    const press = () => {
      addItem(item, produto);
      push('Cart');
    };

    return (
      <ItemContainer onPress={press}>
        <SizeImage size={item.nome} />
        <Title>{item.descricao}</Title>
        <Price>{currencyFormatter.format(item.pivot.valor, { code: 'BRL' })}</Price>
      </ItemContainer>
    );
  }

  render() {
    const { navigation: { pop, state } } = this.props;
    const { tamanhos } = state.params.produto;

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
            <ToolbarTitle>Selecione um tamanho</ToolbarTitle>
          </Toolbar>
          <ItemsList
            numColumns={2}
            data={tamanhos}
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
