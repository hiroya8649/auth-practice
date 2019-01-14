import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QueryString from 'query-string';
import Header from '../component/Header';
import Body from '../component/Body';
import { userConfirm } from '../action/api/UserAction';

class UserConfirmPage extends Component {
  componentWillMount() {
    const parsed = QueryString.parse(this.props.location.search);
    this.props.doConfirm(parsed.key);
  }

  render() {
    return (
      <div>
        <Header title="Email confirmed" titleStyle="offset-sm-2 col-sm-10" />
        <Body>
          {
            this.props.confirmed
              ? (
                <div className="alert alert-primary offset-sm-2 col-sm-8" role="alert">
                  Your account has been created!
                  <br />
                  Login to your email account to check it out!
                </div>
              )
              : (
                <div className="alert alert-warning offset-sm-2 col-sm-8" role="alert">
                  The key is invalid.
                  <br />
                  Maybe your account has been activated!
                </div>
              )
          }
        </Body>
      </div>
    );
  }
}

UserConfirmPage.propTypes = {
  doConfirm: PropTypes.func.isRequired,
  confirmed: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  confirmed: state.auth.confirmed,
});

const mapDispatchToProps = dispatch => ({
  doConfirm: key => dispatch(userConfirm(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmPage);
