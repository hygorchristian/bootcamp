import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadRequest: ['email', 'password'],
  loadSuccess: ['user'],
  loadFailure: ['error'],
  logout: null,
});

export const AuthTypes = Types;
export const AuthActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  user: null,
  isAuth: false,
  loading: false,
  error: null,
});

// Reducer Functions

const loadRequest = state => ({ ...state, loading: true, error: null });
const loadSuccess = (state, { user }) => ({
  ...state, user, loading: false, error: null, isAuth: true
});
const loadFailure = (state, { error }) => ({
 ...state, error, loading: false, isAuth: false 
});
const logout = state => ({
 ...state, user: null, isAuth: false, loading: false, error: null
});

// Reducer

export const AuthReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_REQUEST]: loadRequest,
  [Types.LOAD_SUCCESS]: loadSuccess,
  [Types.LOAD_FAILURE]: loadFailure,
  [Types.LOGOUT]: logout,
});
