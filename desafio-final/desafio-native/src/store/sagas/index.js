import { all, takeLatest } from 'redux-saga/effects';

import { CategoriasTypes } from '../ducks/categorias';
import { ProdutosTypes } from '../ducks/produtos';

import { loadCategorias } from './categorias';
import { loadProdutos } from './produtos';

export default function* () {
  return yield all([
    takeLatest(CategoriasTypes.LOAD_CATEGORIAS_REQUEST, loadCategorias),
    takeLatest(ProdutosTypes.LOAD_PRODUTOS_REQUEST, loadProdutos),
  ]);
}
