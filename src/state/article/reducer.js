import State from './state'

const articleReducer =
  (state = State, action) => {
    let newState;
    switch(action.type){
      case 'INITIAL_ARTICLES':
        newState = Object.assign({}, action.payload);
        return newState;
        break;
      case 'GET_ARTICLE':
        newState = Object.assign({}, action.payload);
        return newState;
      default:
        return state;
        break;
    }
  }

export default articleReducer;
