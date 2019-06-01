import Player from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
};

const INITIAL_STATE = {
  currentSong: null,
  status: Player.status.PLAYING
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD:
      return { ...state, currentSong: action.payload.song, status: Player.status.PLAYING };
    default: return state;
  }
};

export const Creators = {
  loadSong: song => ({
    type: Types.LOAD,
    payload: { song }
  }),
};
