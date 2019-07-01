import { all, takeLatest } from 'redux-saga/effects';

import { CategoriasTypes } from '../ducks/categorias';
import { ProdutosTypes } from '../ducks/produtos';
import { AuthTypes } from '../ducks/auth';
import { UserTypes } from '../ducks/user';
import { PedidosTypes } from '../ducks/pedidos';

import { loadCategorias } from './categorias';
import { loadProdutos } from './produtos';
import { loadAuth } from './auth';
import { signUp } from './user';
import { loadPedidos } from './pedidos';

export default function* () {
  return yield all([
    takeLatest(CategoriasTypes.LOAD_CATEGORIAS_REQUEST, loadCategorias),
    takeLatest(ProdutosTypes.LOAD_PRODUTOS_REQUEST, loadProdutos),
    takeLatest(AuthTypes.LOAD_AUTH_REQUEST, loadAuth),
    takeLatest(UserTypes.LOAD_USER_REQUEST, signUp),
    takeLatest(PedidosTypes.LOAD_PEDIDOS_REQUEST, loadPedidos),
  ]);
}
