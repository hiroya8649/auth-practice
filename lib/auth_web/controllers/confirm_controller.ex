defmodule AuthWeb.ConfirmController do
  use AuthWeb, :controller

  import AuthWeb.Authorize

  alias Phauxth.Confirm
  alias Auth.Accounts
  alias AuthWeb.Email

  def index(conn, params) do
    case Confirm.verify(params) do
      {:ok, user} ->
        Accounts.confirm_user(user)
        Email.confirm_success(user.email)

        conn
        |> put_view(AuthWeb.ConfirmView)
        |> render("info.json", %{info: "Your account has been confirmed"})

      {:error, _message} ->
        error(conn, :unauthorized, 401)
    end
  end
end
