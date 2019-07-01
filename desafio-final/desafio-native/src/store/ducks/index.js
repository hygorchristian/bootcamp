import { combineReducers } from 'redux';

import { CategoriasReducer as categorias } from './categorias';
import { ProdutosReducer as produtos } from './produtos';
import { CarrinhoReducer as carrinho } from './carrinho';
import { AuthReducer as auth } from './auth';

export default combineReducers({
  categorias,
  produtos,
  carrinho,
  auth,
});
