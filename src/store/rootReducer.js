import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

const reducers = combineReducers({
  auth,
  user,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
