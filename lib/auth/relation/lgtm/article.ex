defmodule Auth.Relation.LGTM.Article do
  use Ecto.Schema
  import Ecto.Changeset


  schema "lgtm_article" do
    field :article_id, :id
    field :user_id, :id

    timestamps()
  end

  @doc false
  def changeset(article, attrs) do
    article
    |> cast(attrs, [])
    |> validate_required([])
  end
end
