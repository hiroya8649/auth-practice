import React from 'react';
import ReactDom from 'react-dom';
import AuthApp from './auth/App'
import 'bootstrap';
import './common/style/common'

ReactDom.render(
  <div className="global">
    <AuthApp />
  </div>,
  document.getElementById('root'));