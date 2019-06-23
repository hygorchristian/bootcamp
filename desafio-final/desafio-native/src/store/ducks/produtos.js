import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadProdutosRequest: ['id'],
  loadProdutosSuccess: ['data'],
  loadProdutosFailure: ['error'],
});

export const ProdutosTypes = Types;
export const ProdutosActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

// Reducer Functions

const loadRequest = state => state.merge({ loading: true, error: null });
const loadSuccess = (state, { data }) => state.merge({ data, loading: false, error: null });
const loadFailure = (state, { error }) => state.merge({ error, loading: false });

// Reducer

export const ProdutosReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUTOS_REQUEST]: loadRequest,
  [Types.LOAD_PRODUTOS_SUCCESS]: loadSuccess,
  [Types.LOAD_PRODUTOS_FAILURE]: loadFailure,
});
