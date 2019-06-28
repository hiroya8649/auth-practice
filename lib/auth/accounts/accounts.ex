defmodule Auth.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false

  alias Auth.{Accounts.User, Repo, Sessions, Sessions.Session}

  @doc """
  Returns the list of users.
  """
  def list_users, do: Repo.all(User)

  @doc """
  Gets a single user.
  """
  def get_user(id), do: Repo.get(User, id)

  @doc """
  Gets a user based on the params.

  This is used by Phauxth to get user information.
  """
  def get_by(%{session_id: session_id}) do
    with %Session{user_id: user_id} <- Sessions.get_session(session_id),
         do: get_user(user_id)
  end

  def get_by(%{"email" => email}) do
    Repo.get_by(User, email: email)
  end

  def get_by(%{"user_id" => user_id}), do: Repo.get(User, user_id)

  @doc """
  Creates a user.
  """
  def create_user(attrs) do
    %User{}
    |> User.create_changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a user.
  """
  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a User.
  """
  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.
  """
  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end

  @doc """
  Confirms a user's email.
  """
  def confirm_user(%User{} = user) do
    user |> User.confirm_changeset() |> Repo.update()
  end

  @doc """
  Makes a password reset request.
  """
  def create_password_reset(attrs) do
    with %User{} = user <- get_by(attrs) do
      user
      |> User.password_reset_timestamp_changeset(DateTime.utc_now() |> DateTime.truncate(:second))
      |> Repo.update()
    end
  end

  @doc """
  Updates a user's password.
  """
  def update_password(%User{} = user, attrs) do
    Sessions.delete_user_sessions(user)
    user
    |> User.password_reset_timestamp_changeset(nil)
    |> User.password_reset_changeset(attrs)
    |> Repo.update()
  end

  alias Auth.Accounts.ProfileImage

  @doc """
  Returns the list of profile_images.

  ## Examples

      iex> list_profile_images()
      [%ProfileImage{}, ...]

  """
  def list_profile_images do
    Repo.all(ProfileImage)
  end

  @doc """
  Gets a single profile_image.

  Raises `Ecto.NoResultsError` if the Profile image does not exist.

  ## Examples

      iex> get_profile_image!(123)
      %ProfileImage{}

      iex> get_profile_image!(456)
      ** (Ecto.NoResultsError)

  """
  def get_profile_image!(id), do: Repo.get!(ProfileImage, id)

  @doc """
  Creates a profile_image.

  ## Examples

      iex> create_profile_image(%{field: value})
      {:ok, %ProfileImage{}}

      iex> create_profile_image(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_profile_image(attrs \\ %{}) do
    profile_image = %ProfileImage{}
    |> ProfileImage.create_changeset(attrs)

    {:ok, url} = ProfileImage.create_put_url(profile_image)
    
    %{:url => url, :name => profile_image.changes.file_name }
  end

  @doc """
  Updates a profile_image.

  ## Examples

      iex> update_profile_image(profile_image, %{field: new_value})
      {:ok, %ProfileImage{}}

      iex> update_profile_image(profile_image, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_profile_image(%ProfileImage{} = profile_image, attrs) do
    profile_image
    |> ProfileImage.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a ProfileImage.

  ## Examples

      iex> delete_profile_image(profile_image)
      {:ok, %ProfileImage{}}

      iex> delete_profile_image(profile_image)
      {:error, %Ecto.Changeset{}}

  """
  def delete_profile_image(%ProfileImage{} = profile_image) do
    Repo.delete(profile_image)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking profile_image changes.

  ## Examples

      iex> change_profile_image(profile_image)
      %Ecto.Changeset{source: %ProfileImage{}}

  """
  def change_profile_image(%ProfileImage{} = profile_image) do
    ProfileImage.changeset(profile_image, %{})
  end
end
