import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../action/api/UserAction';
import Header from '../component/Header';
import Body from '../component/Body';

class LoginPage extends Component {
  doLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.doLogin(formData.get('account'), formData.get('password'));
  }

  render() {
    return (
      <div>
        <Header />
        <Body>
          <div className="container">
            <div className="row">
              <form className="offset-sm-3 col-sm-6" onSubmit={e => this.doLogin(e)}>
                <div className="form-group">
                  <label htmlFor="account">
Email
                    <input className="form-control" type="email" name="account" id="account" />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="password">
Password
                    <input className="form-control" type="password" id="password" name="password" />
                  </label>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </Body>
      </div>
    );
  }
}

LoginPage.propTypes = {
  doLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  doLogin: (account, password) => dispatch(userLogin(account, password)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
