import { call, put } from 'redux-saga/effects';
import { createUser } from '../../services/api';

import { UserActions } from '../ducks/user';

export function* signUp({ nome, email, password }) {
  try {
    const response = yield call(createUser, { username: nome, email, password });
    yield put(UserActions.loadUserSuccess(response.data));
  } catch (e) {
    yield put(UserActions.loadUserFailure('Erro ao criar usuário, por favor, tente novamente.'));
  }
}
