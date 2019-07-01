import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadCategoriasRequest: null,
  loadCategoriasSuccess: ['data'],
  loadCategoriasFailure: ['error'],
});

export const CategoriasTypes = Types;
export const CategoriasActions = Creators;

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

export const CategoriasReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIAS_REQUEST]: loadRequest,
  [Types.LOAD_CATEGORIAS_SUCCESS]: loadSuccess,
  [Types.LOAD_CATEGORIAS_FAILURE]: loadFailure,
});
