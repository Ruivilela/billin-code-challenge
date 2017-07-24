import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; 
// redux setup
import {Provider} from 'react-redux';
import store from './state/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
