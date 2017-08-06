import { put, takeEvery, all } from 'redux-saga/effects';
import request from './../../request';
import { ARTICLES_QUERY } from './../../queries';
import { initialArticles } from './action';

export default function* articleEffects(){
  yield all([
    watchGetAllArticles()
  ])
}

function* getAllArticles (){
  const response = yield request(ARTICLES_QUERY)
  const allArticles = yield response.data.articles
  yield put(initialArticles({articles: allArticles}))
}

function* watchGetAllArticles() {
  yield takeEvery('INITIAL_ARTICLES_ASYNC', getAllArticles)
}
