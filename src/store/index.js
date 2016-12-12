import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

/* eslint-disable no-unused-vars */
const logger = (store) => (next) => (action) => {
  if (typeof action !== 'function') {
    console.log('dispatching: ', action);
  }
  return next(action);
};
/* eslint-enable */

/* eslint-disable no-underscore-dangle */
// redux chrome开发工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const aircheapStore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default aircheapStore;
