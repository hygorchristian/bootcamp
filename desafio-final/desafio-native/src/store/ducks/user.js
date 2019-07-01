import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadUserRequest: ['nome', 'email', 'password'],
  loadUserSuccess: ['data'],
  loadUserFailure: ['error'],
});

export const UserTypes = Types;
export const UserActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  user: null,
  loading: false,
  error: null,
});

// Reducer Functions

const loadRequest = state => ({ ...state, loading: true, error: null });
const loadSuccess = (state, { data }) => ({
  ...state, user: data, loading: false, error: null,
});
const loadFailure = (state, { error }) => ({ ...state, error, loading: false });

// Reducer

export const UserReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_USER_REQUEST]: loadRequest,
  [Types.LOAD_USER_SUCCESS]: loadSuccess,
  [Types.LOAD_USER_FAILURE]: loadFailure,
});
