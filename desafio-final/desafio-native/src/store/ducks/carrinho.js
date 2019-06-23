import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setCategoria: ['categoria'],
  setProduto: ['produto'],
  removeProduto: ['id'],
});

export const CarrinhoTypes = Types;
export const CarrinhoActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  categoria: null,
  produtos: [],
  produto: null,
});

// Reducer Functions

const setCategoria = (state, { categoria }) => state.merge({ categoria });
const setProduto = (state, { produto }) => state.merge({ produtos: [...state.produtos, produto], produto });
const removeProduto = (state, { id }) => state.merge({ produtos: state.produtos.filter(item => item.id !== id) });

// Reducer

export const CarrinhoReducer = createReducer(INITIAL_STATE, {
  [Types.SET_CATEGORIA]: setCategoria,
  [Types.SET_PRODUTO]: setProduto,
  [Types.REMOVE_PRODUTO]: removeProduto,
});
