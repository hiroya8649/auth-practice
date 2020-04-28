defmodule AuthWeb.ArticleController do
  use AuthWeb, :controller

  import AuthWeb.Authorize

  alias Auth.Posts
  alias Auth.Posts.Article

  action_fallback AuthWeb.FallbackController

  plug :user_check when action in [:create, :lgtm]

  def index(conn, _params) do
    articles = Posts.list_articles()
    render(conn, "index.json", articles: articles)
  end

  def create(%{assigns: %{current_user: user}} = conn, %{"article" => article_params}) do
    new_article = %{"author" => user.id, "content" => article_params["content"]}
    with {:ok, %Article{} = article} <- Posts.create_article(new_article) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.article_path(conn, :show, article))
      |> render("show.json", article: article)
    end
  end

  def show(conn, %{"id" => id}) do
    article = Posts.get_article!(id)
    render(conn, "show.json", article: article)
  end

  def update(conn, %{"id" => id, "article" => article_params}) do
    article = Posts.get_article!(id)

    with {:ok, %Article{} = article} <- Posts.update_article(article, article_params) do
      render(conn, "show.json", article: article)
    end
  end

  def lgtm(%{assigns: %{current_user: user}} = conn, %{"id" => id}) do
    article = Posts.get_article!(id)
    with {:ok, %Article{} = article} <- Posts.lgtm_article(article, user) do
      render(conn, "show.json", article: article)
    end
  end

  def delete(conn, %{"id" => id}) do
    article = Posts.get_article!(id)

    with {:ok, %Article{}} <- Posts.delete_article(article) do
      send_resp(conn, :no_content, "")
    end
  end
end
