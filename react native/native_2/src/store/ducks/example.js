import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadExampleRequest: null,
  loadExampleSuccess: ['data'],
  loadExampleFailure: ['error'],
});

export const ExampleTypes = Types;
export const ExampleActions = Creators;

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

export const ExampleReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_EXAMPLE_REQUEST]: loadRequest,
  [Types.LOAD_EXAMPLE_SUCCESS]: loadSuccess,
  [Types.LOAD_EXAMPLE_FAILURE]: loadFailure,
});
