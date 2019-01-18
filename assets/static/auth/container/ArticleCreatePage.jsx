import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../component/Header';
import Body from '../component/Body';
import { articleCreate } from '../action/api/ArticleAction';

class ArticleCreatePage extends Component {
  doArticleCreate(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.doArticleCreate(formData.get('article'));
  }

  render() {
    return (
      <div>
        <Header title="Create your article" titleStyle="offset-sm-2 col-sm-10" />
        <Body>
          <div className="row">
            <form className="offset-sm-2 col-sm-8" onSubmit={e => this.doArticleCreate(e)}>

              <div className="form-group">
                <label htmlFor="article" className="col-sm-12">
                  Article
                  <input className="col-sm-12 form-control" type="article" id="article" name="article" />
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

ArticleCreatePage.propTypes = {
  doArticleCreate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  doArticleCreate: content => dispatch(articleCreate(content)),
});

export default connect(null, mapDispatchToProps)(ArticleCreatePage);
