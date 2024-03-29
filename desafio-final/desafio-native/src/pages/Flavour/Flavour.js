import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CarrinhoActions } from '../../store/ducks/carrinho';
import { ProdutosActions } from '../../store/ducks/produtos';

import {
  Container, Background, Toolbar, Button, ToolbarTitle,
  ItemsList, ItemContainer, Image, Title,
} from './styles';

import fundo from '../../assets/img/header-background.png';
import Status from '../../components/Status';
import { getFile } from '../../services/api';
import { DarkLoader, LoaderContainer } from '../Splash/styles';

class Flavour extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    produtos: PropTypes.object.isRequired,
    loadProdutosRequest: PropTypes.func.isRequired,
    carrinho: PropTypes.object.isRequired,
  }


  componentWillMount() {
    const { loadProdutosRequest, carrinho } = this.props;
    loadProdutosRequest(carrinho.categoria.id);
  }

  renderItem = ({ item }) => {
    const { navigation: { push } } = this.props;
    const press = () => {
      push('Size', { produto: item });
    };

    return (
      <ItemContainer onPress={press}>
        <Image source={{ uri: getFile(item.file) }} />
        <Title>{item.nome}</Title>
      </ItemContainer>
    );
  }

  render() {
    const { navigation: { pop }, produtos } = this.props;

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
            <ToolbarTitle>Selecione um sabor</ToolbarTitle>
          </Toolbar>
          {
            produtos.loading ? (
              <LoaderContainer>
                <DarkLoader />
              </LoaderContainer>
            ) : (
              <ItemsList
                numColumns={2}
                data={produtos.data}
                keyExtractor={item => String(item.id)}
                renderItem={this.renderItem}
              />
            )
          }
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ produtos, carrinho }) => ({
  carrinho,
  produtos,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...ProdutosActions,
  ...CarrinhoActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Flavour);
