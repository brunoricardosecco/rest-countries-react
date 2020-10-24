import { combineReducers } from 'redux';

import auth from './auth/reducer';

const reducers = combineReducers({
  auth,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
