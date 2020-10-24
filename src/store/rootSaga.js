import { all, takeLatest } from 'redux-saga/effects';

import { Types as authTypes } from './auth/reducer';

import * as auth from './auth/saga';

function* watchAsyncAuth() {
  yield takeLatest(authTypes.ASYNC_LOGIN, auth.login);
}

export default function* rootSaga() {
  yield all([watchAsyncAuth()]);
}