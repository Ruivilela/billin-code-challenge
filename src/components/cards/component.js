import React, { Component } from 'react';
import style from './style';
import { Link } from 'react-router-dom';

export default class Cards extends Component {
  // lifecycle
  componentWillMount() {
    this.props.actions.getInitialArticles()
  }
  // Renders
  render() {
    let articles;

    if(this.props.articles){
      articles = this.props.articles.map((articles) => {
        return(
          <div style={style.box} key={articles.id}>
            <h2 style={style.author}>
              {articles.author}
            </h2>
            <h6 style={style.title}>
              Title: {articles.title}
            </h6>
            <div>
             {articles.excerpt}
            </div>
            <Link to={`/card/${articles.id}`}>
              See more
            </Link>
          </div>
        )
      })
    }
    // component return
    if(articles){
      return (
        <div className="App" style={style.component}>
          {articles}
        </div>
      );
    } else {
      return(
        <div>
          Loading...
        </div>
      )
    }

  }
}
