import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Markdown from 'react-markdown';
import breaks from 'remark-breaks';
import Prism from 'prismjs';
import Header from '../../component/Header';
import Body from '../../component/Body';
import { articleCreate } from '../../action/api/ArticleAction';

const defaultArticle = "\
# Markdown supported!\n\
- Try to use markdown to write an article\n\
  - Also support code!\n\
```elixir\n\
defmodule Your.Code do\n\
  IO.puts 'Hello world!'\n\
end\n\
```\n\
";

class ArticleCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onKeyDown(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      this.setState(
        prevState => ({ article: `${prevState.article.substring(0, start)}  ${prevState.article.substring(end)}` }),
        () => {
          this.text.selectionEnd = start + 2;
          this.text.selectionStart = this.text.selectionEnd;
        },
      );
    }
  }

  doArticleCreate() {
    this.props.doArticleCreate(this.state.article);
  }

  render() {
    return (
      <div className="article-create-page">
        <Header title="Create your article" className="col-sm-12" />
        <Body>
          <div className="row">
            <textarea
              ref={(obj) => { this.text = obj; }}
              value={this.state.article}
              onKeyDown={e => this.onKeyDown(e)}
              onChange={e => this.onChange(e)}
              className="col-xl-6 editor"
              type="article"
              id="article"
              name="article"
              placeholder={defaultArticle}
            />
            <Markdown
              className="col-xl-6 preview"
              plugins={[breaks]}
              source={this.state.article ? this.state.article : defaultArticle}
            />
            <button className="btn btn-primary col-xl-2 user-login-button" type="button" onClick={() => this.doArticleCreate()}>Submit</button>
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
