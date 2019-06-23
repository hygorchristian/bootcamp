import { call, put } from 'redux-saga/effects';
import { getProdutos } from '../../services/api';

import { ProdutosActions } from '../ducks/produtos';

export function* loadProdutos({ id }) {
  try {
    const response = yield call(getProdutos, id);

    yield put(ProdutosActions.loadProdutosSuccess(response.data));
  } catch (e) {
    yield put(ProdutosActions.loadProdutosFailure('Erro ao buscar os produtos'));
  }
}
