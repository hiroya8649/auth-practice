import React from 'react';
import { Route, Redirect } from 'react-router';
import store from '@/common/js/store';

function getAuthentication() {
  const token = localStorage.getItem('access_token');
  if (token) {
    store.store.dispatch({ type: 'LOGIN_SUCCESS', payload: { access_token: token } });
    return true;
  }
  return false;
}

function PrivateRoute(props) {
  if (getAuthentication()) {
    return <Route {...props} />;
  }
  return <Redirect to="/" />;
}

export default PrivateRoute;
