import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initialArticles } from './../../state/article/action';
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
        getInitialArticles: initialArticles
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
