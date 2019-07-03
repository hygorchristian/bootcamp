import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setCategoria: ['categoria'],
  addItem: ['tamanho', 'produto'],
  removeItem: ['id'],
  loadOrderRequest: ['data'],
  loadOrderSuccess: ['data'],
  loadOrderFailure: ['error'],
});

export const CarrinhoTypes = Types;
export const CarrinhoActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  categoria: null,
  produtos: {},
  valor: 0,
  orderError: null,
  orderSuccess: null,
  orderLoading: false,
});

// Reducer Functions

const setCategoria = (state, { categoria }) => ({ ...state, categoria });

const addItem = (state, { tamanho, produto }) => {
  const produtos = { ...state.produtos };
  produtos[`${tamanho.pivot.id}`] = {
    produto,
    tamanho,
  };

  const valor = state.valor + tamanho.pivot.valor;

  return { ...state, produtos, valor };
};

const removeItem = (state, { id }) => {
  const produtos = { ...state.produtos };
  const novosProdutos = {};
  let valor = 0;
  Object.keys(produtos).forEach((key) => {
    if (key.toString() !== id.toString()) {
      novosProdutos[key] = produtos[key];
      valor += produtos[key].tamanho.pivot.valor;
    }
  });

  return { ...state, produtos: novosProdutos, valor };
};

const loadRequest = state => ({
  ...state,
  orderLoading: true,
  orderError: null,
});

const loadSuccess = (state, { data }) => ({
  ...state,
  orderSuccess: data,
  orderLoading: false,
  orderError: null,
  categoria: null,
  produtos: {},
  valor: 0,
});

const loadError = (state, { error }) => ({
  ...state,
  orderSuccess: null,
  orderLoading: false,
  orderError: error,
});

// Reducer

export const CarrinhoReducer = createReducer(INITIAL_STATE, {
  [Types.SET_CATEGORIA]: setCategoria,
  [Types.ADD_ITEM]: addItem,
  [Types.REMOVE_ITEM]: removeItem,
  [Types.LOAD_ORDER_REQUEST]: loadRequest,
  [Types.LOAD_ORDER_SUCCESS]: loadSuccess,
  [Types.LOAD_ORDER_FAILURE]: loadError,
});
