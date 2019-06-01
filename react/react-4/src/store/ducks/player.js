import Player from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
  PLAYING: 'player/PLAYING',
  HANDLE_POSITION: 'player/HANDLE_POSITION',
  SET_POSITION: 'player/SET_POSITION',
  SET_VOLUME: 'player/SET_VOLUME'
};

const INITIAL_STATE = {
  currentSong: null,
  status: Player.status.PLAYING,
  list: [],
  position: null,
  duration: null,
  positionShown: null,
  volume: 100
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state, position: 0, currentSong: action.payload.song, status: Player.status.PLAYING, list: action.payload.list
      };
    case Types.PLAY:
      return { ...state, status: Player.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Player.status.PAUSED };
    case Types.PLAYING:
      return { ...state, ...action.payload };
    case Types.NEXT: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const prev = state.list[currentIndex + 1];
      if (prev) return { ...state, currentSong: prev, position: 0 };
      return { ...state };
    }
    case Types.PREV: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const prev = state.list[currentIndex - 1];
      if (prev) return { ...state, currentSong: prev, position: 0 };
      return { ...state };
    }
    case Types.HANDLE_POSITION:
      return { ...state, positionShown: state.duration * action.payload.percent };
    case Types.SET_POSITION:
      return { ...state, position: state.duration * action.payload.percent, positionShown: null };
    case Types.SET_VOLUME:
      return { ...state, volume: action.payload.volume };
    default: return state;
  }
};

export const Creators = {
  loadSong: (song, list) => ({
    type: Types.LOAD,
    payload: { song, list }
  }),
  play: () => ({ type: Types.PLAY }),
  pause: () => ({ type: Types.PAUSE }),
  next: () => ({ type: Types.NEXT }),
  prev: () => ({ type: Types.PREV }),
  playing: ({ position, duration }) => ({
    type: Types.PLAYING,
    payload: { position, duration }
  }),
  handlePosition: percent => ({
    type: Types.HANDLE_POSITION,
    payload: { percent }
  }),
  setPosition: percent => ({
    type: Types.SET_POSITION,
    payload: { percent }
  }),
  setVolume: volume => ({
    type: Types.SET_VOLUME,
    payload: { volume }
  })
};
