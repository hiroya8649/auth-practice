defmodule Auth.Posts.Article do
  use Ecto.Schema
  import Ecto.Changeset


  schema "articles" do
    field :content, :string
    field :author, :id

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
end
