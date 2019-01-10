defmodule AuthWeb.ConfirmView do
  use AuthWeb, :view

  def render("info.json", %{info: message}) do
    %{info: %{detail: message}}
  end
end
