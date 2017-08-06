import { put, takeEvery, all } from 'redux-saga/effects';
import request , { requestWithVariables } from './../../request';
import { ARTICLES_QUERY , ARTICLE_QUERY_BY_ID } from './../../queries';
import { initialArticles , getArticle } from './action';

export default function* articleEffects(){
  yield all([
    watchGetAllArticles(),
    watchGetSingleArticle()
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

function* getSingleArticle(data) {
  const response = yield requestWithVariables(ARTICLE_QUERY_BY_ID(), {id:data.payload})
  const article = yield response.data.getArticle[0]
  yield put(getArticle({selected_article: article }))
}

function* watchGetSingleArticle() {
  yield takeEvery('GET_ARTICLE_ASYNC', getSingleArticle)
}
