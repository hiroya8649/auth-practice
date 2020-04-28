defmodule Auth.Repo.Migrations.CreateLgtmArticle do
  use Ecto.Migration

  def change do
    create table(:lgtm_article) do
      add :article_id, references(:articles, on_delete: :delete_all)
      add :user_id, references(:users, on_delete: :delete_all)

      timestamps()
    end

    create index(:lgtm_article, [:article_id])
    create index(:lgtm_article, [:user_id])
  end
end
