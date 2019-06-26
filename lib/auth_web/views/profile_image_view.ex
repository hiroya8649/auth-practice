defmodule AuthWeb.ProfileImageView do
  use AuthWeb, :view
  alias AuthWeb.ProfileImageView

  def render("index.json", %{profile_images: profile_images}) do
    %{data: render_many(profile_images, ProfileImageView, "profile_image.json")}
  end

  def render("show.json", %{profile_image: profile_image}) do
    %{data: render_one(profile_image, ProfileImageView, "profile_image.json")}
  end

  def render("profile_image.json", %{profile_image: profile_image}) do
    %{id: profile_image.id,
      file_name: profile_image.file_name,
      content_length: profile_image.content_length}
  end
end
