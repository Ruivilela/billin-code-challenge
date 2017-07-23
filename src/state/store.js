import { createStore, combineReducers } from 'redux';
// Import reducers over here!
import articleReducer from './article/reducer';

const allReducers = combineReducers({
  articles: articleReducer
})

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
