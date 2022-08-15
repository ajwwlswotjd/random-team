import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';

const loggerMiddleware = createLogger();

const env = process.env.NODE_ENV || 'development';

const tempStore = createStore(reducers);
export const store = tempStore;

export const persistor = persistStore(store);

export default { store, persistor };
