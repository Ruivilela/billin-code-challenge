import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// redux setup
import {Provider} from 'react-redux';
import store from './state/store';
// react router
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
