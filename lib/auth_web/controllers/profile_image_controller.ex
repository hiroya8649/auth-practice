defmodule AuthWeb.ProfileImageController do
  use AuthWeb, :controller

  alias Auth.Accounts
  alias Auth.Accounts.ProfileImage

  action_fallback AuthWeb.FallbackController

  def index(conn, _params) do
    profile_images = Accounts.list_profile_images()
    render(conn, "index.json", profile_images: profile_images)
  end

  def create(conn, %{"profile_image" => profile_image_params}) do
    with {:ok, url} <- Accounts.create_profile_image(profile_image_params) do
      conn
      |> put_status(:created)
      # |> put_resp_header("location", Routes.profile_image_path(conn, :show, profile_image))
      |> render("url.json", url: url)
    end
  end

  def show(conn, %{"id" => id}) do
    profile_image = Accounts.get_profile_image!(id)
    render(conn, "show.json", profile_image: profile_image)
  end

  def update(conn, %{"id" => id, "profile_image" => profile_image_params}) do
    profile_image = Accounts.get_profile_image!(id)

    with {:ok, %ProfileImage{} = profile_image} <- Accounts.update_profile_image(profile_image, profile_image_params) do
      render(conn, "show.json", profile_image: profile_image)
    end
  end

  def delete(conn, %{"id" => id}) do
    profile_image = Accounts.get_profile_image!(id)

    with {:ok, %ProfileImage{}} <- Accounts.delete_profile_image(profile_image) do
      send_resp(conn, :no_content, "")
    end
  end
end
