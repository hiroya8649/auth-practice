import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../action/api/UserAction';

class LoginPage extends Component {
  doLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.doLogin(formData.get('account'), formData.get('password'));
  }

  render() {
    return (<form onSubmit={(e) => this.doLogin(e)}>
      <input name="account" />
      <input name="password" />
      <button className="btn btn-secondary" type="submit">Login</button>
    </form>);
  }
}

const mapDispatchToProps = dispatch => ({
  doLogin: (account, password) => dispatch(userLogin(account, password))
});

export default connect(null, mapDispatchToProps)(LoginPage);