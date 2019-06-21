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

const orders = [
  {
    id: 3,
    usuario: 'Diego Schell Fernandes',
    valor: 42.00,
    observacoes: 'Por favor, tirar cebola',
    itens: [
      {
        id: 2,
        imageURL: 'http://pngimg.com/uploads/cocacola/cocacola_PNG22.png',
        titulo: 'Coca cola',
        tamanho: '300ml'
      },
      {
        id: 3,
        imageURL: 'http://pngimg.com/uploads/pizza/pizza_PNG44092.png',
        titulo: 'Pizza de calabresa',
        tamanho: 'Média',
        quantidade: 4,
      },
      {
        id: 4,
        imageURL: 'https://www.multarte.com.br/wp-content/uploads/2019/03/pizza-png3.png',
        titulo: 'Pizza 4 queijos',
        tamanho: 'Grande'
      }
    ]
  },
  {
    id: 4,
    usuario: 'Diego Schell Fernandes',
    valor: 42.00,
    observacoes: 'Por favor, tirar cebola',
    itens: [
      {
        id: 2,
        imageURL: 'http://pngimg.com/uploads/cocacola/cocacola_PNG22.png',
        titulo: 'Coca cola',
        tamanho: '300ml'
      },
      {
        id: 3,
        imageURL: 'http://pngimg.com/uploads/pizza/pizza_PNG44092.png',
        titulo: 'Pizza de calabresa',
        tamanho: 'Média'
      },
      {
        id: 4,
        imageURL: 'https://www.multarte.com.br/wp-content/uploads/2019/03/pizza-png3.png',
        titulo: 'Pizza 4 queijos',
        tamanho: 'Grande'
      }
    ]
  },

];

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
