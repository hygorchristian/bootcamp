import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CategoriasActions } from '../../store/ducks/categorias';
import { CarrinhoActions } from '../../store/ducks/carrinho';
import { getFile } from '../../services/api';

import {
  Container, Background, Toolbar, Button, ToolbarTitle, Cart, Bag, Notification,
  ItemsList, ItemContainer, Image, Info, Title, Description, Time, TimeText,
} from './styles';

import fundo from '../../assets/img/header-background.png';
import bag from '../../assets/img/bag.png';
import Status from '../../components/Status';

class Home extends React.Component {
  componentWillMount() {
    const { loadCategoriasRequest } = this.props;
    loadCategoriasRequest();
  }

  renderItem = ({ item }) => {
    const { navigation: { push }, setCategoria } = this.props;

    const press = () => {
      setCategoria(item);
      push('Flavour');
    };

    return (
      <ItemContainer onPress={press}>
        <Image source={{ uri: getFile(item.file) }} />
        <Info>
          <Title>{item.nome}</Title>
          <Description>{item.descricao}</Description>
          <Time>
            <Icon name="access-alarm" size={12} color="#d8d8d8" />
            <TimeText>{item.tempo} mins</TimeText>
          </Time>
        </Info>
      </ItemContainer>
    );
  }

  render() {
    const { navigation: { push }, categorias } = this.props;

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
            <Button onPress={() => push('Orders')}>
              <Icon name="history" color="#ffffff" size={24} />
            </Button>
            <ToolbarTitle>Pizzaria Don Juan</ToolbarTitle>
            <Cart onPress={() => push('Cart')}>
              <Notification notifications />
              <Bag source={bag} />
            </Cart>
          </Toolbar>
          <ItemsList
            data={categorias.data}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ categorias }) => ({
  categorias,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...CategoriasActions,
  ...CarrinhoActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Home);
