import axios from 'axios';
import { push } from 'connected-react-router';

export function userLogin(account, password) {
  return (dispatch) => {
    axios.post('/api/sessions', { session: { email: account, password } })
      .then(({ data }) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        dispatch(push('/posts'));
      });
  };
}

export function userCreate(nickname, account, password, recaptchaToken) {
  return (dispatch) => {
    axios.post('/api/users', {
      user: {
        nickname, email: account, password,
      },
      recaptcha_token: recaptchaToken,
    })
      .then(() => {
        dispatch(push('/signup/finished'));
      });
  };
}

export function userConfirm(key) {
  return (dispatch) => {
    axios.get(`/api/confirm?key=${key}`)
      .then(() => {
        dispatch({ type: 'USER_CONFIRM_SUCCESS' });
      })
      .catch(() => {
        dispatch({ type: 'USER_CONFIRM_FAILURE' });
      });
  };
}

export function userPassResetRequest(email) {
  return (dispatch) => {
    axios.post('/api/password_resets', { password_reset: { email } })
      .then(() => {
        dispatch({ type: 'USER_PASS_RESET_REQUEST_SUCCESS' });
        dispatch(push('/pass_reset_sent'));
      })
      .catch(() => {
        dispatch({ type: 'USER_PASS_RESET_REQUEST_FAILURE' });
      });
  };
}

export function userPassReset(key, password) {
  return (dispatch) => {
    axios.put('/api/password_resets/update', { password_reset: { key, password } })
      .then(() => {
        dispatch({ type: 'USER_PASS_RESET_SUCCESS' });
        dispatch(push('/pass_reset_success'));
      })
      .catch(() => {
        dispatch({ type: 'USER_PASS_RESET_FAILURE' });
      });
  };
}
