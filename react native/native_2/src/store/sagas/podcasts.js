import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { PodcastsActions } from '../ducks/podcasts';

export function* loadPodcasts() {
  try {
    const response = yield call(api.get, 'podcasts');
    yield put(PodcastsActions.loadPodcastsSuccess(response.data));
  } catch (e) {
    yield put(PodcastsActions.loadPodcastsFailure('Erro ao buscar os podcasts'));
  }
}
