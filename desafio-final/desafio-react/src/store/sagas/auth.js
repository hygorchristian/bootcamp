import { call, put } from 'redux-saga/effects';
import { performLogin } from '../../services/api';

import { AuthActions } from '../ducks/auth';

export function* login({ email, password }) {
  try {
    const response = yield call(performLogin, { email, password });

    yield put(AuthActions.loadSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
    yield put(AuthActions.loadFailure('Erro ao logar'));
  }
}
