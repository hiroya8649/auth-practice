defmodule Auth.AccountsTest do
  use Auth.DataCase

  alias Auth.Accounts
  alias Auth.Accounts.User

  @create_attrs %{email: "fred@example.com", password: "reallyHard2gue$$"}
  @update_attrs %{email: "frederick@example.com"}
  @invalid_attrs %{email: "", password: ""}

  def fixture(:user, attrs \\ @create_attrs) do
    {:ok, user} = Accounts.create_user(attrs)
    user
  end

  describe "read user data" do
    test "list_users/1 returns all users" do
      user = fixture(:user)
      assert Accounts.list_users() == [user]
    end

    test "get returns the user with given id" do
      user = fixture(:user)
      assert Accounts.get_user(user.id) == user
    end

    test "change_user/1 returns a user changeset" do
      user = fixture(:user)
      assert %Ecto.Changeset{} = Accounts.change_user(user)
    end
  end

  describe "write user data" do
    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Accounts.create_user(@create_attrs)
      assert user.email == "fred@example.com"
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = fixture(:user)
      assert {:ok, user} = Accounts.update_user(user, @update_attrs)
      assert %User{} = user
      assert user.email == "frederick@example.com"
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = fixture(:user)
      assert {:error, %Ecto.Changeset{}} = Accounts.update_user(user, @invalid_attrs)
      assert user == Accounts.get_user(user.id)
    end

    test "update password changes the stored hash" do
      %{password_hash: stored_hash} = user = fixture(:user)
      attrs = %{password: "CN8W6kpb"}
      {:ok, %{password_hash: hash}} = Accounts.update_password(user, attrs)
      assert hash != stored_hash
    end

    test "update_password with weak password fails" do
      user = fixture(:user)
      attrs = %{password: "pass"}
      assert {:error, %Ecto.Changeset{}} = Accounts.update_password(user, attrs)
    end
  end

  describe "delete user data" do
    test "delete_user/1 deletes the user" do
      user = fixture(:user)
      assert {:ok, %User{}} = Accounts.delete_user(user)
      refute Accounts.get_user(user.id)
    end
  end

  describe "profile_images" do
    alias Auth.Accounts.ProfileImage

    @valid_attrs %{content_length: 42, file_name: "some file_name"}
    @update_attrs %{content_length: 43, file_name: "some updated file_name"}
    @invalid_attrs %{content_length: nil, file_name: nil}

    def profile_image_fixture(attrs \\ %{}) do
      {:ok, profile_image} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Accounts.create_profile_image()

      profile_image
    end

    test "list_profile_images/0 returns all profile_images" do
      profile_image = profile_image_fixture()
      assert Accounts.list_profile_images() == [profile_image]
    end

    test "get_profile_image!/1 returns the profile_image with given id" do
      profile_image = profile_image_fixture()
      assert Accounts.get_profile_image!(profile_image.id) == profile_image
    end

    test "create_profile_image/1 with valid data creates a profile_image" do
      assert {:ok, %ProfileImage{} = profile_image} = Accounts.create_profile_image(@valid_attrs)
      assert profile_image.content_length == 42
      assert profile_image.file_name == "some file_name"
    end

    test "create_profile_image/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_profile_image(@invalid_attrs)
    end

    test "update_profile_image/2 with valid data updates the profile_image" do
      profile_image = profile_image_fixture()
      assert {:ok, %ProfileImage{} = profile_image} = Accounts.update_profile_image(profile_image, @update_attrs)
      assert profile_image.content_length == 43
      assert profile_image.file_name == "some updated file_name"
    end

    test "update_profile_image/2 with invalid data returns error changeset" do
      profile_image = profile_image_fixture()
      assert {:error, %Ecto.Changeset{}} = Accounts.update_profile_image(profile_image, @invalid_attrs)
      assert profile_image == Accounts.get_profile_image!(profile_image.id)
    end

    test "delete_profile_image/1 deletes the profile_image" do
      profile_image = profile_image_fixture()
      assert {:ok, %ProfileImage{}} = Accounts.delete_profile_image(profile_image)
      assert_raise Ecto.NoResultsError, fn -> Accounts.get_profile_image!(profile_image.id) end
    end

    test "change_profile_image/1 returns a profile_image changeset" do
      profile_image = profile_image_fixture()
      assert %Ecto.Changeset{} = Accounts.change_profile_image(profile_image)
    end
  end
end
