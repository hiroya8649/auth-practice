import axios from 'axios';
import { push } from 'connected-react-router';

export function userLogin(account, password) {
  return dispatch => {
    axios.post('/api/sessions', { session: { email: account, password: password } })
      .then(({ data }) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        dispatch(push('/welcome'));
      })
  }
}