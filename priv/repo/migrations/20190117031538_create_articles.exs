defmodule Auth.Repo.Migrations.CreateArticles do
  use Ecto.Migration

  def change do
    create table(:articles) do
      add :content, :text
      add :author, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:articles, [:author])
  end

end
