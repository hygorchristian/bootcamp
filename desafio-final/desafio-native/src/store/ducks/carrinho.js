import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setCategoria: ['categoria'],
  addItem: ['tamanho', 'produto'],
  removeItem: ['id'],
});

export const CarrinhoTypes = Types;
export const CarrinhoActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  categoria: null,
  produtos: {},
  valor: 0,
});

// Reducer Functions

const setCategoria = (state, { categoria }) => state.merge({ categoria });
const addItem = (state, { tamanho, produto }) => {
  const produtos = { ...state.produtos };
  produtos[`${tamanho.pivot.id}`] = {
    produto,
    tamanho,
  };

  const valor = state.valor + tamanho.pivot.valor;

  return state.merge({ produtos, valor });
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

  return state.merge({ produtos: novosProdutos, valor });
};

// Reducer

export const CarrinhoReducer = createReducer(INITIAL_STATE, {
  [Types.SET_CATEGORIA]: setCategoria,
  [Types.ADD_ITEM]: addItem,
  [Types.REMOVE_ITEM]: removeItem,
});
