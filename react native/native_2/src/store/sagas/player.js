import { call } from 'redux-saga/effects';
import TrackPlayer from 'react-native-track-player';

export function* init() {
  yield call(TrackPlayer.setupPlayer);

  TrackPlayer.addEventListener('playback-track-changed', console.tron.log);
  TrackPlayer.addEventListener('playback-sate', console.tron.log);
}
