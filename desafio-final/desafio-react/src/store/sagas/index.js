import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { OrdersTypes } from '../ducks/orders';

import { login } from './auth';
import { loadOrders } from './orders';

export default function* () {
  return yield all([
    takeLatest(AuthTypes.LOAD_REQUEST, login),
    takeLatest(OrdersTypes.ORDERS_LOAD_REQUEST, loadOrders),
  ]);
}
