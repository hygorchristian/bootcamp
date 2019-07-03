import { call, put, select } from 'redux-saga/effects';
import { postPedido } from '../../services/api';

import { CarrinhoActions } from '../ducks/carrinho';

export function* requestOrder({ data }) {
  try {
    const token = yield select(state => state.auth.user.token);
    const response = yield call(postPedido, { token, data });

    if (response.status === 200) {
      yield put(CarrinhoActions.loadOrderSuccess('Pedido realizado com sucesso!'));
    } else {
      yield put(CarrinhoActions.loadOrderFailure('Houve um erro ao solicitar o pedido'));
    }
  } catch (e) {
    yield put(CarrinhoActions.loadOrderFailure('Houve um erro ao solicitar o pedido'));
  }
}
