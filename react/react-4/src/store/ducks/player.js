import Player from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
  PLAYING: 'player/PLAYING',
};

const INITIAL_STATE = {
  currentSong: null,
  status: Player.status.PLAYING,
  list: [],
  position: null,
  duration: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD:
      return {
       ...state, currentSong: action.payload.song, status: Player.status.PLAYING, list: action.payload.list
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
      if (prev) return { ...state, currentSong: prev };
      return { ...state };
    }
    case Types.PREV: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const prev = state.list[currentIndex - 1];
      if (prev) return { ...state, currentSong: prev };
      return { ...state };
    }

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
  })
};
