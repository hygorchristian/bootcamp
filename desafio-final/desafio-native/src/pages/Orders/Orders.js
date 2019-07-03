import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  Container, Background, Toolbar, Button, ToolbarTitle, ItemContainer, Info,
  Title, ItemsList, ToolbarController,
} from './styles';
import Status from '../../components/Status';

import fundo from '../../assets/img/header-background.png';
import { PedidosActions } from '../../store/ducks/pedidos';
import { showError } from '../../utils';
import Order from './Order';
import { AuthActions } from '../../store/ducks/auth';

const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login' }),
  ],
});

class Orders extends React.Component {
  static propTypes = {
    pedidos: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    loadPedidosRequest: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { loadPedidosRequest } = this.props;
    loadPedidosRequest();
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps.pedidos;
    if (error) {
      showError(error);
    }
  }

  logout = () => {
    const { logout, navigation: { dispatch } } = this.props;
    logout();
    dispatch(resetAction);
  };

  renderItem = ({ item }) => (
    <Order item={item} />
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
            <ToolbarController>
              <Button onPress={() => pop()}>
                <Icon name="arrow-back" color="#ffffff" size={24} />
              </Button>
              <ToolbarTitle>Meus pedidos</ToolbarTitle>
            </ToolbarController>
            <Button onPress={this.logout}>
              <Icon name="exit-to-app" color="#ffffff" size={24} />
            </Button>
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
  ...AuthActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Orders);
