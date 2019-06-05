import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastSuccess: ['podcast']
});

export const PlayerTypes = Types;
export const PlayerActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
});

// Reducer Functions

const setPodcast = (state, { podcast }) => state.merge({ podcast, current: podcast.tracks[0].id });

// Reducer

export const PlayerReducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: setPodcast,
});
