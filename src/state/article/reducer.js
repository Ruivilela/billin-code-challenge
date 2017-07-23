import State from './state'

const articleReducer =
  (state = State, action) => {
    switch(action.type){
      case 'INITIAL_ARTICLES':
        const newState = Object.assign({}, action.payload);
        return newState;
        break;
      default:
        return state;
        break;
    }
  }

export default articleReducer;
