import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadPedidosRequest: [],
  loadPedidosSuccess: ['data'],
  loadPedidosFailure: ['error'],
  logout: null,
});

export const PedidosTypes = Types;
export const PedidosActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

// Reducer Functions

const loadRequest = state => ({ ...state, loading: true, error: null });
const loadSuccess = (state, { data }) => ({
  ...state, data, loading: false, error: null,
});
const loadFailure = (state, { error }) => ({ ...state, error, loading: false });

// Reducer

export const PedidosReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PEDIDOS_REQUEST]: loadRequest,
  [Types.LOAD_PEDIDOS_SUCCESS]: loadSuccess,
  [Types.LOAD_PEDIDOS_FAILURE]: loadFailure,
});
