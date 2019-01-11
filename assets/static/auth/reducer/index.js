import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const authInitialState = {
  confirmed: false,
};

function auth(state = authInitialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, auth: action.payload };
    case 'USER_CONFIRM_SUCCESS':
      return { ...state, confirmed: true };
    default:
      return state;
  }
}

export default history => combineReducers({
  router: connectRouter(history),
  auth,
});
