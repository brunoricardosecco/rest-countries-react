import { all, takeLatest } from 'redux-saga/effects';

import { Types as authTypes } from './auth/reducer';
import { Types as regionTypes } from './region/reducer';
import { Types as countryTypes } from './country/reducer';

import * as auth from './auth/saga';
import * as region from './region/saga';
import * as country from './country/saga';

function* watchAsyncAuth() {
  yield takeLatest(authTypes.ASYNC_LOGIN, auth.login);
  yield takeLatest(authTypes.ASYNC_SIGNUP, auth.signUp);
  yield takeLatest(authTypes.ASYNC_SIGN_OUT, auth.signOut);
}

function* watchAsyncRegion() {
  yield takeLatest(regionTypes.ASYNC_ADD_REGION, region.addRegion);
  yield takeLatest(regionTypes.ASYNC_GET_ALL_REGIONS, region.getAllRegions);
}

function* watchAsyncCountry() {
  yield takeLatest(countryTypes.ASYNC_ADD_COUNTRY, country.addCountry);
  yield takeLatest(countryTypes.ASYNC_GET_COUNTRIES, country.getAll);
}

export default function* rootSaga() {
  yield all([watchAsyncAuth(), watchAsyncRegion(), watchAsyncCountry()]);
}
