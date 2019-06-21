import { call, put, select } from 'redux-saga/effects';
import { fetchOrders } from '../../services/api';

import { OrdersActions } from '../ducks/orders';

export function* loadOrders() {
  try {
    const token = yield select(state => state.Auth.user.token);
    const response = yield call(fetchOrders, token);
    yield put(OrdersActions.ordersLoadSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    yield put(OrdersActions.ordersLoadFailure('Erro ao buscar os pedidos'));
  }
}
