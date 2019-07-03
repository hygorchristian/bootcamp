import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Currency from 'react-currency-formatter';
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import Ws from '@adonisjs/websocket-client';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Order,
  Date,
  Divider,
  Item,
  ItemImage,
  ItemInfo,
  ItemList, ItemSize,
  ItemTitle, Observation,
  Price,
  Title,
  Head,
  Status
} from './styles';
import { AuthActions } from '../../store/ducks/auth';
import { OrdersActions } from '../../store/ducks/orders';
import {getFile} from "../../services/api";

class OrderItem extends Component {
  static propTypes = {
    order: PropTypes.object.isRequired
  }

  state = {
    status: ''
  }

  componentWillMount() {
    const { order } = this.props;
    this.setState({ status: order.status });
    this.registerSocket(order.id);
  }

  registerSocket = async (id) => {
    const ws = Ws('ws://gonode-desafio-node.herokuapp.com/').connect();

    ws.subscribe(`pedido:${id}`);
    ws.getSubscription(`pedido:${id}`).on('status', (status) => {
      this.setState({ status });
    });
  }

  handleChange = (data) => {
    const { order: { id }, orderUpdateRequest } = this.props;
    orderUpdateRequest(id, data.target.value);
  }

  render() {
    const { order } = this.props;
    const { status } = this.state;

    return (
      <Order>
        <Head>
          <Title>
            <span>Pedido #</span>
            <strong>{order.id}</strong>
            <span> - </span>
            {order.usuario}
          </Title>
          <Status status={status}>
            <span>{status}</span>
            <select onChange={this.handleChange}>
              <option value="Recebido">Recebido</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Pronto">Pronto</option>
              <option value="Cancelado">Cancelado</option>
              <option value="Entregue">Entregue</option>
            </select>
          </Status>
        </Head>
        <Date>
          <Moment fromNow locale="pt-BR">{order.created_at}</Moment>
        </Date>
        <Price>
          <Currency
            quantity={order.valor_total}
            currency="BRL"
          />
        </Price>
        <Divider />
        <ItemList>
          {order.itens.map(item => (
            <Item key={item.id}>
              <ItemImage src={getFile(item.image)} alt={item.titulo} />
              <ItemInfo>
                <ItemTitle>{item.titulo}</ItemTitle>
                <ItemSize>
                  <span>Tamanho: </span>
                  {item.tamanho}
                </ItemSize>
              </ItemInfo>
            </Item>
          ))}
        </ItemList>
        <Divider />
        <Observation>
          <strong>Observações: </strong>
          {order.observacoes}
        </Observation>
      </Order>
    );
  }
}

const mapStateToProps = () => ({

});


const mapDipatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(OrderItem);
