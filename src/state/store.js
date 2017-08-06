import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
// Import reducers over here!
import articleReducer from './article/reducer';

// import all effects here
import articleEffects from './article/effects'
// register all reducers here
const allReducers = combineReducers({
  articles: articleReducer
})

// register all effects here
function* rootEffects(){
  yield all([
    articleEffects()
  ])
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  allReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootEffects)

export default store
