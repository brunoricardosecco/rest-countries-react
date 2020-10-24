import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const persistConfig = {
  key: '@RestCountries/app',
  stateReconciler: autoMergeLevel2,
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const clearStore = () => localStorage.removeItem('@RestCountries/app');

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return { store, persistor };
};

export const { store, persistor } = configureStore();
