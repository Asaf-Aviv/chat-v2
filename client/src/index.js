import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import './socket/socket';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
