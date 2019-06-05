import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadPodcastsRequest: null,
  loadPodcastsSuccess: ['data'],
  loadPodcastsFailure: ['error'],
});

export const PodcastsTypes = Types;
export const PodcastsActions = Creators;

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

export const PodcastsReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PODCASTS_REQUEST]: loadRequest,
  [Types.LOAD_PODCASTS_SUCCESS]: loadSuccess,
  [Types.LOAD_PODCASTS_FAILURE]: loadFailure,
});
