defmodule Auth.Repo.Migrations.CreateProfileImages do
  use Ecto.Migration

  def change do
    create table(:profile_images) do
      add :file_name, :string
      add :content_length, :integer
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:profile_images, [:user_id])
  end
end
