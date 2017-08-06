import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initialArticlesAsync } from './../../state/article/action';
import Cards from './component.js'

function mapStateToProps(state) {
  return {
    articles: state.articles.articles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getInitialArticles: initialArticlesAsync
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
