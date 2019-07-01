import { call, put } from 'redux-saga/effects';
import { getCategorias } from '../../services/api';

import { CategoriasActions } from '../ducks/categorias';

export function* loadCategorias() {
  try {
    const response = yield call(getCategorias);

    yield put(CategoriasActions.loadCategoriasSuccess(response.data));
  } catch (e) {
    yield put(CategoriasActions.loadCategoriasFailure('Erro ao buscar as categorias'));
  }
}
