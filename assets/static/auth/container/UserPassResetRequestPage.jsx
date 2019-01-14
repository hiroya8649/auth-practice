import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userPassResetRequest } from '../action/api/UserAction';
import Header from '../component/Header';
import Body from '../component/Body';

class UserPassResetRequestPage extends Component {
  doResetRequest(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.doResetRequest(formData.get('account'));
  }

  render() {
    return (
      <div>
        <Header title="Forget password" titleStyle="offset-sm-2 col-sm-10" />
        <Body>
          <div className="row">
            <form className="offset-sm-2 col-sm-8" onSubmit={e => this.doResetRequest(e)}>

              <div className="form-group">
                <label htmlFor="account" className="col-sm-12">
                  Email
                  <input className="col-sm-12 form-control" type="email" id="account" name="account" />
                </label>
              </div>

              <div className="form-group col-sm-12">
                <button className="btn btn-primary col-sm-3 user-login-button" type="submit">Send reset email</button>
              </div>
            </form>
          </div>
        </Body>
      </div>
    );
  }
}

UserPassResetRequestPage.propTypes = {
  doResetRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  doResetRequest: account => dispatch(userPassResetRequest(account)),
});

export default connect(null, mapDispatchToProps)(UserPassResetRequestPage);
