import 'typeface-roboto';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import authHelper from './utils/authHelper';
import { httpClient } from 'services';
import configureStore from 'configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const historyOptions = {
  basename: process.env.REACT_APP_BASE_URL, // The base URL of the app
  forceRefresh: false, // Set true to force full page refreshes
  keyLength: 6, // The length of location.key
  // A function to use to confirm navigation with the user
  getUserConfirmation: (message, callback) => callback(window.confirm(message)),
};

const history = createBrowserHistory(historyOptions);

const initialState = {};

const store = configureStore(initialState);

const render = () => {
  ReactDOM.render(
    <StoreProvider store={store}>
      <App history={history} />
    </StoreProvider>,
    document.getElementById('root'),
  );
};

window.AppContext = {
  history,
  httpClient,
  rerender: render,
  store,
};

authHelper.rewind();

render();

registerServiceWorker();
