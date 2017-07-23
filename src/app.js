import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Cards from './components/cards/index';
import store from './state/store';

export const App = () => {
  return(
    <div>
      <Cards />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
