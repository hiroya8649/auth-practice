defmodule Auth.Accounts.ProfileImage do
  use Ecto.Schema
  import Ecto.Changeset


  schema "profile_images" do
    field :content_length, :integer
    field :file_name, :string
    field :user_id, :id

    timestamps()
  end

  @doc false
  def changeset(profile_image, attrs) do
    profile_image
    |> cast(attrs, [:file_name, :content_length])
    |> validate_required([:file_name, :content_length])
  end
end
