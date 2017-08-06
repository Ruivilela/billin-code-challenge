export const initialArticles = (payload) => {
  return {
    type:'INITIAL_ARTICLES',
    payload: payload
  }
}

export const initialArticlesAsync = (payload) => {
  return {
    type:'INITIAL_ARTICLES_ASYNC',
    payload: payload
  }
}


export const getArticle = (payload) => {
  return {
    type:'GET_ARTICLE',
    payload: payload
  }
}
