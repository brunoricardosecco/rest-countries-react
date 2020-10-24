import { put } from 'redux-saga/effects';

import { Types as authTypes } from './reducer';

export function* login({ payload }) {
  try {
    yield put({
      type: authTypes.ASYNC_LOGIN_SUCCESS,
      payload: {
        token: 'token',
      },
    });

    payload.history.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
}
