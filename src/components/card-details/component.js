import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { requestWithVariables } from './../../request';
import { ARTICLE_QUERY_BY_ID } from './../../queries';
import style from './style';


export default class CardDetails extends Component {

  componentWillMount() {
    requestWithVariables(ARTICLE_QUERY_BY_ID(), {id:this.props.match.params.id})
      .then(response => {
        this.props.actions.getArticle({
          selected_article: response.data.getArticle[0]
        })
    });
  }

  render(){
    if(this.props.selected_article){
      return(
        <div style={style.component}>
          <h1>
            {this.props.selected_article.author}
          </h1>
          <h3>
            {this.props.selected_article.title}
          </h3>
          <p>
            {this.props.selected_article.content}
          </p>
            {this.props.selected_article.published}
            {this.props.selected_article.tags}
          <p>
            <Link to={'/'}>
              Back
            </Link>
          </p>
        </div>
      )
    } else {
      return(
        <div>
          Loading...
        </div>
      )
    }
  }
}
