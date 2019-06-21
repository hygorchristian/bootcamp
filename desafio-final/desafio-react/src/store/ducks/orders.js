import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  ordersLoadRequest: [],
  ordersLoadSuccess: ['data'],
  ordersLoadFailure: ['error'],
});

export const OrdersTypes = Types;
export const OrdersActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});
// Reducer Functions

const loadRequest = state => ({ ...state, loading: true, error: null });
const loadSuccess = (state, { data }) => ({
  ...state, data, loading: false, error: null
});
const loadFailure = (state, { error }) => ({
 ...state, error, loading: false
});

// Reducer

export const OrdersReducer = createReducer(INITIAL_STATE, {
  [Types.ORDERS_LOAD_REQUEST]: loadRequest,
  [Types.ORDERS_LOAD_SUCCESS]: loadSuccess,
  [Types.ORDERS_LOAD_FAILURE]: loadFailure,
});
