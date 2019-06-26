defmodule Auth.Accounts.ProfileImage do
  use Ecto.Schema
  import Ecto.Changeset
  alias ExAws.S3


  schema "profile_images" do
    field :content_length, :integer
    field :file_name, :string
    field :user_id, :id

    timestamps()
  end

  def create_changeset(profile_image, attrs) do
    profile_image
    |> cast(attrs, [:content_length, :user_id])
    |> validate_required([:content_length, :user_id])
  end

  @doc false
  def changeset(profile_image, attrs) do
    profile_image
    |> cast(attrs, [:file_name, :content_length])
    |> validate_required([:file_name, :content_length])
  end

  def create_put_url(user_id) do
    time = DateTime.utc_now() |> DateTime.to_string()
    filename = Integer.to_string(user_id) <> "_" <> time
    ExAws.Config.new(:s3)
    |> IO.inspect()
    |> S3.presigned_url(
      :put,
      "authpractice",
      "profile_images/" <> filename
    )
  end
end
