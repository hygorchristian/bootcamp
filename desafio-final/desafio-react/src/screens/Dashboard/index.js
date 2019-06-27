import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AuthActions } from '../../store/ducks/auth';
import { OrdersActions } from '../../store/ducks/orders';

import {
 Container, Header, BrandContainer, Logo, Brand, Menu, Separator,
  AppInfo, UserName, SignOut, Orders, Content, Bag
} from './styles';

import logo from '../../assets/img/logo@3x.png';
import bag from '../../assets/img/bag.png';
import Order from '../../components/Order';

class Dashboard extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    Auth: PropTypes.object.isRequired,
    ordersLoadRequest: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { ordersLoadRequest } = this.props;
    ordersLoadRequest();
  }

  handleSignOut = (e) => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  }

  render() {
    const { Auth, Pedidos } = this.props;
    return (
      <Container>
        <Header>
          <nav>
            <BrandContainer>
              <Logo src={logo} alt="logo" />
              <Brand>Pizzaria Don Juan</Brand>
            </BrandContainer>
            <Menu>
              <AppInfo>
                <UserName>{Auth.user.username}</UserName>
                <SignOut onClick={this.handleSignOut}>Sair do app</SignOut>
              </AppInfo>
              <Separator />
              <Orders notification>
                <Bag src={bag} alt="Bag" />
                <div />
              </Orders>
            </Menu>
          </nav>
        </Header>
        <Content>
          <h1>Últimos Pedidos</h1>
          {
            Pedidos.data.map(order => (
              <Order key={order.id} order={order} />
            ))
          }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ Auth, Orders: Pedidos }) => ({
  Auth,
  Pedidos
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...AuthActions,
  ...OrdersActions
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Dashboard);
