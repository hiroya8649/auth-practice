defmodule Auth.Posts.Article do
  use Ecto.Schema
  import Ecto.Changeset

  alias Auth.Accounts.User

  schema "articles" do
    field :content, :string
    field :author, :id
    many_to_many(:lgtm, User, join_through: Auth.Relation.LGTM.Article, on_replace: :delete)

    timestamps()
  end

  @doc false
  def create_changeset(article, attrs) do
    article
    |> cast(attrs, [:author, :content])
    |> validate_required([:author, :content])
  end

  def changeset(article, attrs) do
    article
    |> cast(attrs, [:content])
    |> validate_required([:content])
  end

  def changeset_lgtm(article, user) do
    article
    |> change()
    |> put_assoc(:lgtm, [user | article.lgtm])
  end
end
