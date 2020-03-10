import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {AsyncStorage} from 'react-native';
import reducer from '../reducers';
import rootSaga from '../sagas';
// import { RESET_APP_STATE } from '../constants/ActionTypes';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const saga = createSagaMiddleware();

const rootReducer = (state, action) => {
  //   if (action.type === RESET_APP_STATE) {
  //     storage.removeItem('persist:root')
  //     state = undefined
  //   }
  return reducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialStore = {
  home: {},
  movie_detail: {},
};

let store = createStore(persistedReducer, initialStore, applyMiddleware(saga));

let persistor = persistStore(store);
saga.run(rootSaga);

export {store, persistor};
