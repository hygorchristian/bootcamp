import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { login } from './auth';

export default function* () {
  return yield all([
    takeLatest(AuthTypes.LOAD_REQUEST, login),
  ]);
}
