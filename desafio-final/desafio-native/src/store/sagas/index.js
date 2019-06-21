import { all, takeLatest } from 'redux-saga/effects';

// import { PodcastsTypes } from '../ducks/podcasts';
// import { loadPodcasts } from './podcasts';

export default function* () {
  return yield all([
    // takeLatest(PodcastsTypes.LOAD_REQUEST, loadPodcasts),
  ]);
}
