import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducers from './reducers';
const {  artGallery } = reducers;

const rootReducer = combineReducers({
  artGallery
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>{
       return getDefaultMiddleware()
        .concat(middlewares);
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {
  store
};
