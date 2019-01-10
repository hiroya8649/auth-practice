defmodule AuthWeb.SessionView do
  use AuthWeb, :view

  def render("info.json", %{info: token}) do
    %{access_token: token}
  end
end
