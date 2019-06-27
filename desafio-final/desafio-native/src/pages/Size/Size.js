import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { CarrinhoActions } from '../../store/ducks/carrinho';

import {
  Container, Background, Toolbar, Button, ToolbarTitle,
  ItemsList, ItemContainer, Image, Title, Price,
} from './styles';

import fundo from '../../assets/img/header-background.png';
import Status from '../../components/Status';
import SizeImage from '../../components/SizeImage';

class Size extends React.Component {
  renderItem = ({ item }) => {
    const { navigation: { push }, setTamanho } = this.props;
    const press = () => {
      setTamanho(item);
      push('Cart');
    };

    return (
      <ItemContainer onPress={press}>
        {/*<SizeImage size={item.nome} />*/}
        {/*<Title>{item.descricao}</Title>*/}
        {/*<Price>{currencyFormatter.format(item.pivot.valor, { code: 'BRL' })}</Price>*/}
      </ItemContainer>
    );
  }

  render() {
    const { navigation: { pop }, produto } = this.props;

    console.tron.log("produto -> ", produto)

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
            data={[1]}
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
