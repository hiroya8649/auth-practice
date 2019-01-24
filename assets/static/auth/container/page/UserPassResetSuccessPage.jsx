import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../component/Header';
import Body from '../../component/Body';

class UserPassResetSuccessPage extends Component {
  render() {
    return (
      <div>
        <Header title="Password reset" className="offset-sm-2 col-sm-10" />
        <Body>
          <div className="alert alert-primary offset-sm-2 col-sm-8" role="alert">
            Your password has been reset!
          </div>
        </Body>
      </div>
    );
  }
}

export default connect(null, null)(UserPassResetSuccessPage);
