import React, { Component } from 'react';
import currencyFormatter from 'currency-formatter';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';
import Ws from '@adonisjs/websocket-client';

import {
  Description, Info, ItemContainer, OrderStatus, Price, Title,
} from './styles';
import { getSocketUrl } from '../../services/api';

export default class Order extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  state = {
    status: '',
  };

  componentWillMount() {
    const { item } = this.props;
    this.setState({ status: item.status });
    this.registerSocket(item.id);
  }

  registerSocket = (id) => {
    const ws = Ws(getSocketUrl()).connect();

    ws.subscribe(`pedido:${id}`);
    ws.getSubscription(`pedido:${id}`).on('status', (status) => {
      this.setState({ status });
    });
  }

  render() {
    const { item } = this.props;
    const { status } = this.state;

    return (
      <ItemContainer>
        <Info>
          <Title>Pedido #{item.id}</Title>
          <Description>
            {moment(item.created_at).locale('pt-br').fromNow()}
          </Description>
          <Price>{currencyFormatter.format(item.valor_total, { code: 'BRL' })}</Price>
        </Info>
        <OrderStatus>{status}</OrderStatus>
      </ItemContainer>
    );
  }
}
