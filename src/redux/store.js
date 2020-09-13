import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

// the middlewares that the store is expecting from redux are going to be contained in an array
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default { store, persistor };
