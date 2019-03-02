/* eslint-disable no-underscore-dangle, no-undef */

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from 'reducers';

declare var ENVIRONMENT;

const middlewares = [thunk];

// Store types are not defined
let store = null;

export function configureStore(initialState) {
  const enhancers = [applyMiddleware(...middlewares)];

  if (ENVIRONMENT !== 'PRO' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const composeEnhancers = compose(...enhancers);

  store = createStore(combinedReducers, initialState, composeEnhancers);
  return store;
}

export default function getStore() {
  return store;
}
