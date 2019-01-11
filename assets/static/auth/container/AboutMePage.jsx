import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header';
import Body from '../component/Body';

class AboutMePage extends Component {
  render() {
    return (
      <div>
        <Header title="About me" titleStyle="col-sm-12" />
        <Body>
          <div />
        </Body>
      </div>
    );
  }
}

export default connect(null, null)(AboutMePage);
