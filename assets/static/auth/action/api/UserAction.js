import axios from 'axios';
import { push } from 'connected-react-router';

export function userLogin(account, password) {
  return (dispatch) => {
    axios.post('/api/sessions', { session: { email: account, password } })
      .then(({ data }) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        dispatch(push('/welcome'));
      });
  };
}

export function userCreate(nickname, account, password) {
  return (dispatch) => {
    axios.post('/api/users', { user: { nickname, email: account, password } })
      .then(() => {
        dispatch(push('/'));
      })
  }
}
