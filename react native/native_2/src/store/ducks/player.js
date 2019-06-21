import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastSuccess: ['podcast'],
  setCurrent: ['current'],
  play: null,
  pause: null,
  next: null,
  prev: null,
  reset: null,
});

export const PlayerTypes = Types;
export const PlayerActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
  playing: false,
});

// Reducer Functions

const setPodcast = (state, { podcast }) => state.merge({ podcast, current: podcast.tracks[0].id });
const setCurrent = (state, { current }) => state.merge({ current });
const play = state => state.merge({ playing: true });
const pause = state => state.merge({ playing: false });
const reset = state => state.merge({ podcast: null, current: null, playing: false });

// Reducer

export const PlayerReducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: setPodcast,
  [Types.SET_CURRENT]: setCurrent,
  [Types.PLAY]: play,
  [Types.PAUSE]: pause,
  [Types.RESET]: reset,
});
