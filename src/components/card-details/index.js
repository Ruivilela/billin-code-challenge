import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticleAsync } from './../../state/article/action';
import CardDetails from './component.js'

function mapStateToProps(state) {
  return {
    selected_article: state.articles.selected_article
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getArticle: getArticleAsync
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails)
