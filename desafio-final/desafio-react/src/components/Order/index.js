import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  Title
} from './styles';

class OrderItem extends Component {
  static propTypes = {
    order: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { order } = this.props;
    this.registerSocket(order.id);
  }

  registerSocket = (id) => {
    console.tron.log('order id -> ', id);
  }

  render() {
    const { order } = this.props;

    return (
      <Order>
        <Title>
          <span>Pedido #</span>
          <strong>{order.id}</strong>
          <span> - </span>
          {order.usuario}
        </Title>
        <Date>há 2 segundos</Date>
        <Price>
          <span>R$</span>
          {order.valor_total}
        </Price>
        <Divider />
        <ItemList>
          {order.itens.map(item => (
            <Item key={item.id}>
              <ItemImage src={item.image.url} alt={item.titulo} />
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

export default OrderItem;
