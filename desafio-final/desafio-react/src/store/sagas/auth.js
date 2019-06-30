import { call, put } from 'redux-saga/effects';
import { performLogin } from '../../services/api';

import { AuthActions } from '../ducks/auth';

export function* login({ email, password }) {
  try {
    const response = yield call(performLogin, { email, password });
    const { data } = response;

    if(data.is_admin !== 0){
      yield put(AuthActions.loadSuccess(data));
    }else{
      yield put(AuthActions.loadFailure('O usuário informado não é admnistrador.'));
    }
  } catch (error) {
    console.tron.log(error);
    yield put(AuthActions.loadFailure('Erro ao logar'));
  }
}
