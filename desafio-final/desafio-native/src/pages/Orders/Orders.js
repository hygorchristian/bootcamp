import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container, Background, Toolbar, Button, ToolbarTitle, ItemContainer, Info,
  Title, Description, Price, OrderStatus, ItemsList,
} from './styles';
import Status from '../../components/Status';

import fundo from '../../assets/img/header-background.png';
import { PedidosActions } from '../../store/ducks/pedidos';

class Orders extends React.Component {
  static propTypes = {
    pedidos: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    loadPedidosRequest: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { loadPedidosRequest } = this.props;
    loadPedidosRequest();
  }

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
    const { navigation: { pop }, pedidos } = this.props;

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
            data={pedidos.data}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
            ListEmptyComponent={() => (
              <ItemContainer>
                <Info>
                  <Title>Você não possui nenhum pedido no seu histórico. Faça um pedido agora mesmo :)</Title>
                </Info>
              </ItemContainer>
            )}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ pedidos }) => ({
  pedidos,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...PedidosActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Orders);
