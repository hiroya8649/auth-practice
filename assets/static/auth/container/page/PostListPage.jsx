import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Markdown from 'react-markdown';
import breaks from 'remark-breaks';
import Prism from 'prismjs';
import Header from '../../component/Header';
import Body from '../../component/Body';
import Post from '../../component/Post';
import { postList } from '../../action/api/ArticleAction';

class PostListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: '',
    };
  }

  componentDidMount() {
    this.doPostFetchAll();
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  doPostFetchAll() {
    this.props.doPostFetchAll();
  }

  render() {
    return (
      <div className="article-list-page">
        <Header title="User posts" className="col-sm-12" />
        <Body>
          {this.props.posts.map((post) => (
            <Post className="offset-sm-2 col-sm-8 post" key={post.id} source={post.content} />
          ))}
        </Body>
      </div>
    );
  }
}

PostListPage.propTypes = {
  doPostFetchAll: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  posts: state.post.posts,
})

const mapDispatchToProps = dispatch => ({
  doPostFetchAll: () => dispatch(postList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListPage);
