import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header';
import Body from '../component/Body';
import Prism from 'prismjs';

class TestPage extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div>
        <Header title="Test!" titleStyle="offset-sm-2 col-sm-10" />
        <Body>
          <pre>
            <code className="line-numbers language-elixir">
              {
                `defmodule AuthWeb.Auth.Token do
  @moduledoc """
  Custom token implementation using Phauxth.Token behaviour and Phoenix Token.
  """

  @behaviour Phauxth.Token

  alias Phoenix.Token
  alias AuthWeb.Endpoint

  @max_age 14_400
  @token_salt "x5XQvSSC"

  @impl true
  def sign(data, opts \\ []) do
    Token.sign(Endpoint, @token_salt, data, opts)
  end

  @impl true
  def verify(token, opts \\ []) do
    Token.verify(Endpoint, @token_salt, token, opts ++ [max_age: @max_age])
  end
end
`}
            </code>
          </pre>
        </Body>
      </div>
    );
  }
}

export default connect(null, null)(TestPage);
