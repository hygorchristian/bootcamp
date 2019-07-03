import { call, put, select } from 'redux-saga/effects';
import { getPedidos } from '../../services/api';

import { PedidosActions } from '../ducks/pedidos';

export function* loadPedidos() {
  try {
    const { id, token } = yield select(state => state.auth.user);
    const response = yield call(getPedidos, { id, token });
    yield put(PedidosActions.loadPedidosSuccess(response.data));
  } catch (e) {
    yield put(PedidosActions.loadPedidosFailure('Erro ao buscar as pedidos'));
  }
}
