import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userCreate } from '../action/api/UserAction';
import Header from '../component/Header';
import Body from '../component/Body';

class UserCreatePage extends Component {
  doLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.doCreate(formData.get('nickname'), formData.get('account'), formData.get('password'));
  }

  render() {
    return (
      <div>
        <Header title="Create your account!" titleStyle="offset-sm-2 col-sm-10" />
        <Body>
          <div className="row">
            <form className="offset-sm-2 col-sm-8" onSubmit={e => this.doLogin(e)}>
              <div className="form-group">
                <label htmlFor="nickname" className="col-sm-12">
                  Nickname
                    <input className="form-control col-sm-12" name="nickname" id="nickname" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="account" className="col-sm-12">
                  Email
                    <input className="form-control col-sm-12" type="email" name="account" id="account" />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="col-sm-12">
                  Password
                    <input className="form-control col-sm-12" type="password" id="password" name="password" />
                </label>
              </div>
              <div className="form-group col-sm-12">
                <button className="btn btn-primary col-sm-3" type="submit">Go!</button>
              </div>
            </form>
          </div>
        </Body>
      </div>
    );
  }
}

UserCreatePage.propTypes = {
  doCreate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  doCreate: (nickname, account, password) => dispatch(userCreate(nickname, account, password))
});

export default connect(null, mapDispatchToProps)(UserCreatePage);
