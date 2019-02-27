import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const authInitialState = {
  confirmed: false,
};

function auth(state = authInitialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, accessToken: action.payload.access_token };
    case 'USER_CONFIRM_SUCCESS':
      return { ...state, confirmed: true };
    default:
      return state;
  }
}

function post(state = { posts: [] }, action) {
  switch (action.type) {
    case 'POST_FETCH_ALL_SUCCESS':
      return { ...state, posts: action.payload.data };
    default:
      return state;
  }
}

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  post,
});
