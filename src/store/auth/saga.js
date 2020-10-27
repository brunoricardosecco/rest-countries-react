import { put } from 'redux-saga/effects';

import { Types as authTypes } from './reducer';
import { Types as userTypes } from '../user/reducer';

import * as AuthServices from '../../services/requests/Auth';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield AuthServices.SignIn({
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@RestCountries/token', token);

    yield put({
      type: authTypes.ASYNC_LOGIN_SUCCESS,
      payload: {
        token,
      },
    });

    yield put({
      type: userTypes.ASYNC_GET_USER_SUCCESS,
      payload: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

    payload.history.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, history } = payload;

    yield AuthServices.SignUp({
      email,
      password,
      name,
    });

    yield put({
      type: authTypes.ASYNC_SIGNUP_SUCCESS,
    });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
}
