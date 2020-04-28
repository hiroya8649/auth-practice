import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../../action/api/UserAction';
import Header from '../../component/Header';
import Body from '../../component/Body';

class UserLoginPage extends Component {
  doLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.doLogin(formData.get('account'), formData.get('password'));
  }

  goCreate(e) {
    e.preventDefault();
    this.props.history.push('/page/accounts/signup');
  }

  render() {
    return (
      <div>
        <Header title="Hey! Try login!" className="offset-sm-2 col-sm-10" />
        <Body>
          <div className="row">
            <form className="offset-sm-2 col-sm-8" onSubmit={e => this.doLogin(e)}>
              <div className="form-group">
                <label htmlFor="account" className="col-sm-12">
                  Email
                  <input className="col-sm-12 form-control" type="email" name="account" id="account" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="col-sm-12">
                  Password
                  <input className="col-sm-12 form-control" type="password" id="password" name="password" />
                </label>
              </div>

              <div className="form-group col-sm-12">
                <a
                  className="user-create-link"
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.push('/page/accounts/signup');
                  }}
                >
                  {'Actually this site don\'t need \'users\' but I just want you to try. :)'}
                </a>
                <br />
                <a
                  className="user-create-link"
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.push('/page/accounts/forget_password');
                  }}
                >
                  Or do you forget your password?
                </a>
              </div>
              <div className="form-group col-sm-12">
                <button className="btn btn-primary col-sm-3 user-login-button" type="submit">Login</button>
              </div>
            </form>
          </div>
        </Body>
      </div>
    );
  }
}

UserLoginPage.propTypes = {
  doLogin: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
};

const mapDispatchToProps = dispatch => ({
  doLogin: (account, password) => dispatch(userLogin(account, password)),
});

export default connect(null, mapDispatchToProps)(UserLoginPage);
