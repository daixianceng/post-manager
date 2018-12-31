import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createLogger from './createLogger';

export default function configureStore(initialState, helpers = {}) {
  const middleware = [thunk.withExtraArgument(helpers)];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger());
  }

  // https://redux.js.org/docs/api/createStore.html
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );

  return store;
}
