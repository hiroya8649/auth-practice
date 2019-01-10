import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

function auth(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, auth: action.payload }
    default:
      return state;
  }
}

export default history => combineReducers({
  router: connectRouter(history),
  auth
});