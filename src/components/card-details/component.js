import React , { Component } from 'react';
import { requestWithVariables } from './../../request';
import { ARTICLE_QUERY_BY_ID } from './../../queries';

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
    return(
      <div>
        I'm working
      </div>
    )
  }
}
