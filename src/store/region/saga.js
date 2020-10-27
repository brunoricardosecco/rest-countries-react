import { put } from 'redux-saga/effects';

import { Types as regionTypes } from './reducer';

import * as RegionServices from '../../services/requests/Region';

export function* addRegion({ payload }) {
  try {
    const { name, clearFields } = payload;

    const response = yield RegionServices.addRegion({ name });

    yield put({
      type: regionTypes.ASYNC_ADD_REGION_SUCCESS,
      payload: {
        region: response.data.region,
      },
    });

    clearFields();
  } catch (error) {
    console.log(error);
  }
}

export function* getAllRegions() {
  try {
    const response = yield RegionServices.getAllRegions();

    const { regions } = response.data;

    yield put({
      type: regionTypes.ASYNC_GET_ALL_REGIONS_SUCCESS,
      payload: {
        regions,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
