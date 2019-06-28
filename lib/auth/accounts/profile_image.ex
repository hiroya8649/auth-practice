defmodule Auth.Accounts.ProfileImage do
  use Ecto.Schema
  import Ecto.Changeset
  alias ExAws.S3

  @valid_type ["image/jpeg", "image/png", "image/gif"]
  @type_ext_map %{"image/jpeg" => ".jpg", "image/png" => ".png", "image/gif" => ".gif"}
  @bucket_name "authpractice"
  @path_prefix "profile_images/"

  schema "profile_images" do
    field :content_length, :integer
    field :file_name, :string
    field :user_id, :id
    field :mime_type, :string, virtual: true

    timestamps()
  end

  def create_changeset(profile_image, attrs) do
    profile_image
    |> cast(attrs, [:mime_type, :content_length, :user_id])
    |> validate_required([:mime_type, :content_length, :user_id])
    |> validate_inclusion(:mime_type, @valid_type)
    |> create_file_name()
  end

  defp create_file_name(profile_image) do
    time = DateTime.utc_now() |> DateTime.to_string()
    file_name = Integer.to_string(profile_image.changes.user_id) <> "_" <> time <> @type_ext_map[profile_image.changes.mime_type]
    profile_image
    |> cast(%{:file_name => file_name}, [:file_name])
  end

  @doc false
  def changeset(profile_image, attrs) do
    profile_image
    |> cast(attrs, [:file_name, :content_length])
    |> validate_required([:file_name, :content_length])
  end

  def create_put_url(profile_image) do
    ExAws.Config.new(:s3)
    |> S3.presigned_url(
      :put,
      @bucket_name,
      @path_prefix <> profile_image.changes.file_name,
      [headers: ["content-length": profile_image.changes.content_length]]
    )
  end
end
