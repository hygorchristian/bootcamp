import React, { Component } from 'react';
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
import coca from '../../assets/img/coca.png';
import pizza1 from '../../assets/img/pizza-marguerita.png';
import pizza2 from '../../assets/img/pizza-mussarela.png';

class OrderItem extends Component {
  registerSocket = (id) => {

  }

  componentWillMount() {
    const { order } = this.props;
    // this.registerSocket(order.id);
  }

  render() {
    return (
      <Order>
        <Title>
          Pedido
          <strong>#3</strong>
          {' '}
          - Diego Schell Fernandes
        </Title>
        <Date>há 2 segundos</Date>
        <Price>R$ 42,00</Price>
        <Divider />
        <ItemList>
          <Item>
            <ItemImage src={coca} alt="Coca" />
            <ItemInfo>
              <ItemTitle>Pizza Calabresa</ItemTitle>
              <ItemSize>Tamanho: média</ItemSize>
            </ItemInfo>
          </Item>
          <Item>
            <ItemImage src={pizza1} alt="Coca" />
            <ItemInfo>
              <ItemTitle>Pizza Calabresa</ItemTitle>
              <ItemSize>Tamanho: média</ItemSize>
            </ItemInfo>
          </Item>
          <Item>
            <ItemImage src={pizza2} alt="Coca" />
            <ItemInfo>
              <ItemTitle>Pizza Calabresa</ItemTitle>
              <ItemSize>Tamanho: média</ItemSize>
            </ItemInfo>
          </Item>
        </ItemList>
        <Divider />
        <Observation>
          <strong>Observações: </strong>
          Favor remover o tomate da pizza
        </Observation>
      </Order>
    );
  }
}

export default OrderItem;
