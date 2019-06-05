import { all, takeLatest } from 'redux-saga/effects';

import { PodcastsTypes } from '../ducks/podcasts';
import { loadPodcasts } from './podcasts';
import { init } from './player';

export default function* () {
  return yield all([
    init(),
    takeLatest(PodcastsTypes.LOAD_PODCASTS_REQUEST, loadPodcasts),
  ]);
}
