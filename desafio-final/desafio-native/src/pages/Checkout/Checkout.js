import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import lodash from 'lodash';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import {
  Container, Background, Toolbar, Button, ToolbarTitle, ToolbarPrice,
  BottomMenu, ButtonContainer, ButtonText, Form, TextArea,
  Row, Input,
} from './styles';
import Status from '../../components/Status';

import fundo from '../../assets/img/header-background.png';
import { CarrinhoActions } from '../../store/ducks/carrinho';
import { showError, showSuccess, validator } from '../../utils';
import { DarkLoader, LoaderContainer } from '../Splash/styles';

const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home' }),
    NavigationActions.navigate({ routeName: 'Orders' }),
  ],
});

class Checkout extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    carrinho: PropTypes.object.isRequired,
    loadOrderRequest: PropTypes.func.isRequired,
  }

  state = {
    observacao: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
  }

  componentWillReceiveProps(nextProps) {
    const { orderError, orderSuccess } = nextProps.carrinho;
    const { navigation: { dispatch } } = this.props;

    if (orderError) {
      showError(orderError);
    }
    if (orderSuccess) {
      showSuccess(orderSuccess);
      dispatch(resetAction);
    }
  }

  realizarPedido = () => {
    const {
      observacao, cep, rua, numero, bairro,
    } = this.state;
    const { carrinho, loadOrderRequest } = this.props;
    const produtos = lodash.values(carrinho.produtos);

    if (!validator([observacao, cep, rua, numero, bairro])) return;

    const data = {
      observacoes: observacao,
      valor_total: carrinho.valor,
      itens: produtos.map(item => ({ produto_tamanho_id: item.tamanho.pivot.id, quantidade: 1 })),
    };

    loadOrderRequest(data);
  };


  render() {
    const { navigation: { pop }, carrinho } = this.props;
    const {
      observacao, cep, rua, numero, bairro,
    } = this.state;

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
            <ToolbarTitle>Realizar Pedido</ToolbarTitle>
            <ToolbarPrice>{currencyFormatter.format(carrinho.valor, { code: 'BRL' })}</ToolbarPrice>
          </Toolbar>
          <Form>
            <TextArea
              placeholder="Alguma observação?"
              autoCapitalize="none"
              value={observacao}
              onChangeText={(state) => { this.setState({ observacao: state }); }}
            />
            <Row>
              <Input
                placeholder="Qual o seu CEP?"
                autoCapitalize="none"
                value={cep}
                onChangeText={(state) => { this.setState({ cep: state }); }}
              />
            </Row>
            <Row>
              <Input
                placeholder="Rua"
                autoCapitalize="none"
                value={rua}
                onChangeText={(state) => { this.setState({ rua: state }); }}
              />
              <Input
                marginLeft={12}
                width={95}
                placeholder="Nº"
                autoCapitalize="none"
                value={numero}
                onChangeText={(state) => { this.setState({ numero: state }); }}
              />
            </Row>
            <Row>
              <Input
                placeholder="Bairro"
                autoCapitalize="none"
                value={bairro}
                onChangeText={(state) => { this.setState({ bairro: state }); }}
              />
            </Row>
          </Form>
          {
            carrinho.orderLoading ? (
              <LoaderContainer>
                <DarkLoader />
              </LoaderContainer>
            ) : (
              <BottomMenu>
                <ButtonContainer onPress={this.realizarPedido}>
                  <ButtonText>REALIZAR PEDIDO</ButtonText>
                  <Icon name="chevron-right" size={24} color="#ffffff" />
                </ButtonContainer>
              </BottomMenu>
            )
          }
        </Container>
      </>
    );
  }
}


const mapStateToProps = ({ carrinho }) => ({
  carrinho,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...CarrinhoActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Checkout);
