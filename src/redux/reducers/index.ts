import playerReducer from './playerReducer';
import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import { transformCircular } from './ref/transformCircular';
import { CookieStorage } from 'redux-persist-cookie-storage';
import storage from 'redux-persist/lib/storage';

import Cookies from 'js-cookie';
import mapReducer from './mapReducer';

const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies),
  transform: [transformCircular],
};

const localPersistConfig = {
  key: 'local',
  storage: storage,
  transform: [transformCircular],
};

const reducers = combineReducers({
  player: persistReducer(localPersistConfig, playerReducer),
  map: persistReducer(localPersistConfig, mapReducer),
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);

// export default reducers;
