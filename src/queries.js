export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_QUERY_BY_ID = () => {
  return `query($id: String){
    getArticle(id: $id){
      author
      content
      published
      tags
      title
    }
  }`
}
