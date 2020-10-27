import { put } from 'redux-saga/effects';

import { Types as countryTypes } from './reducer';

import * as CountryServices from '../../services/requests/Country';

export function* addCountry({ payload }) {
  try {
    const { name, regionId, flag, population, clearFields } = payload;

    const response = yield CountryServices.addCountry({
      name,
      regionId,
      flag,
      population,
    });

    const { country } = response.data;

    yield put({
      type: countryTypes.ASYNC_ADD_COUNTRY_SUCCESS,
      paylaod: {
        country,
      },
    });

    clearFields();
  } catch (error) {
    console.log(error);
  }
}

export function* getAll() {
  try {
    const response = yield CountryServices.findAll();

    const { countries } = response.data;

    yield put({
      type: countryTypes.ASYNC_GET_COUNTRIES_SUCCESS,
      payload: {
        countries,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
