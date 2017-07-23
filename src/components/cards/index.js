import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import request from './../../request';
import { ARTICLES_QUERY } from './../../queries';
import { initialArticles } from './../../state/article/action';

export class Cards extends Component {
  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.props.actions.getInitialArticles(
        { articles: response.data.articles }
      );
    });
  }
  // Renders
  render() {
    return (
      <div className="App">
        <h2>Billin code challenge</h2>
        <pre>{JSON.stringify(this.props.articles, null, 2)}</pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getInitialArticles: initialArticles
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
