import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header';
import Body from '../component/Body';

class UserCreateFinishPage extends Component {
  render() {
    return (
      <div>
        <Header title="Comfirm your account!" titleStyle="offset-sm-2 col-sm-10" />
        <Body>
          <div className="alert alert-primary offset-sm-2 col-sm-8" role="alert">
            Your account has been created!
      Login to your email account to check it out!
</div>
        </Body>
      </div>
    );
  }
}

export default connect(null, null)(UserCreateFinishPage);
