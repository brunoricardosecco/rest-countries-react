import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import region from './region/reducer';
import country from './country/reducer';

const reducers = combineReducers({
  auth,
  user,
  country,
  region,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
