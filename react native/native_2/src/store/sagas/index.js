import { all, takeLatest } from 'redux-saga/effects';

import { PodcastsTypes } from '../ducks/podcasts';
import { PlayerTypes } from '../ducks/player';

import { loadPodcasts } from './podcasts';
import {
  init, setPodcast, play, pause, prev, next, reset,
} from './player';

export default function* () {
  return yield all([
    init(),

    takeLatest(PodcastsTypes.LOAD_PODCASTS_REQUEST, loadPodcasts),

    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.PREV, prev),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.RESET, reset),
  ]);
}
