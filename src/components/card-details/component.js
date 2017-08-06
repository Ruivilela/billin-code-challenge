import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style';


export default class CardDetails extends Component {

  componentWillMount() {
    this.props.actions.getArticle(this.props.match.params.id);
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
