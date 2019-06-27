import { call, put, select } from 'redux-saga/effects';
import { fetchOrders, putOrder } from '../../services/api';

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

export function* updateOrder({ id, status }) {
  try {
    const token = yield select(state => state.Auth.user.token);
    const response = yield call(putOrder, { id, status, token });
    console.tron.log(response)
    // yield put(OrdersActions.ordersLoadSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    yield put(OrdersActions.ordersLoadFailure('Erro ao buscar os pedidos'));
  }
}
