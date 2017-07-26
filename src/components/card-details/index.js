import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticle } from './../../state/article/action';
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
        getArticle: getArticle
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails)
