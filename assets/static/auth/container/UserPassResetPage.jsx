import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QueryString from 'query-string';
import { userPassReset } from '../action/api/UserAction';
import Header from '../component/Header';
import Body from '../component/Body';

class UserPassResetPage extends Component {
  doReset(e) {
    e.preventDefault();
    const parsed = QueryString.parse(this.props.location.search);
    const formData = new FormData(e.target);
    this.props.doReset(parsed.key, formData.get('password'));
  }

  render() {
    return (
      <div>
        <Header title="Reset password" titleStyle="offset-sm-2 col-sm-10" />
        <Body>
          <div className="row">
            <form className="offset-sm-2 col-sm-8" onSubmit={e => this.doReset(e)}>

              <div className="form-group">
                <label htmlFor="password" className="col-sm-12">
                  Password
                  <input className="col-sm-12 form-control" type="password" id="password" name="password" />
                </label>
              </div>

              <div className="form-group col-sm-12">
                <button className="btn btn-primary col-sm-3 user-login-button" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </Body>
      </div>
    );
  }
}

UserPassResetPage.propTypes = {
  doReset: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  doReset: (key, password) => dispatch(userPassReset(key, password)),
});

export default connect(null, mapDispatchToProps)(UserPassResetPage);
