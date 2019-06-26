defmodule AuthWeb.ProfileImageControllerTest do
  use AuthWeb.ConnCase

  alias Auth.Accounts
  alias Auth.Accounts.ProfileImage

  @create_attrs %{
    content_length: 42,
    file_name: "some file_name"
  }
  @update_attrs %{
    content_length: 43,
    file_name: "some updated file_name"
  }
  @invalid_attrs %{content_length: nil, file_name: nil}

  def fixture(:profile_image) do
    {:ok, profile_image} = Accounts.create_profile_image(@create_attrs)
    profile_image
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all profile_images", %{conn: conn} do
      conn = get(conn, Routes.profile_image_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create profile_image" do
    test "renders profile_image when data is valid", %{conn: conn} do
      conn = post(conn, Routes.profile_image_path(conn, :create), profile_image: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.profile_image_path(conn, :show, id))

      assert %{
               "id" => id,
               "content_length" => 42,
               "file_name" => "some file_name"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.profile_image_path(conn, :create), profile_image: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update profile_image" do
    setup [:create_profile_image]

    test "renders profile_image when data is valid", %{conn: conn, profile_image: %ProfileImage{id: id} = profile_image} do
      conn = put(conn, Routes.profile_image_path(conn, :update, profile_image), profile_image: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.profile_image_path(conn, :show, id))

      assert %{
               "id" => id,
               "content_length" => 43,
               "file_name" => "some updated file_name"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, profile_image: profile_image} do
      conn = put(conn, Routes.profile_image_path(conn, :update, profile_image), profile_image: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete profile_image" do
    setup [:create_profile_image]

    test "deletes chosen profile_image", %{conn: conn, profile_image: profile_image} do
      conn = delete(conn, Routes.profile_image_path(conn, :delete, profile_image))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.profile_image_path(conn, :show, profile_image))
      end
    end
  end

  defp create_profile_image(_) do
    profile_image = fixture(:profile_image)
    {:ok, profile_image: profile_image}
  end
end
