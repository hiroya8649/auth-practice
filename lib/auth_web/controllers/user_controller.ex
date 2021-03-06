defmodule AuthWeb.UserController do
  use AuthWeb, :controller

  import AuthWeb.Authorize

  alias Phauxth.Log
  alias Auth.Accounts
  alias Auth.Recaptcha
  alias AuthWeb.{Auth.Token, Email}

  action_fallback AuthWeb.FallbackController

  # the following plugs are defined in the controllers/authorize.ex file
  plug :user_check when action in [:index, :show]
  plug :id_check when action in [:update, :delete]

  def index(conn, _) do
    users = Accounts.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, body) do
    key = Token.sign(%{"email" => body["user"]["email"]})
    with \
      {:ok, %{"success"=> true}} <- Recaptcha.validate_token(body["recaptcha_token"]),
      {:ok, user} <- Accounts.create_user(body["user"])
    do
      Log.info(%Log{user: user.id, message: "user created"})
      Email.confirm_request(body["user"]["email"], key)
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.user_path(conn, :show, user))
      |> render("show.json", user: user)
    end
  end

  def show(%Plug.Conn{assigns: %{current_user: user}} = conn, %{"id" => id}) do
    user = if id == to_string(user.id), do: user, else: Accounts.get_user(id)
    render(conn, "show.json", user: user)
  end

  def update(%Plug.Conn{assigns: %{current_user: user}} = conn, %{"user" => user_params}) do
    with {:ok, user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(%Plug.Conn{assigns: %{current_user: user}} = conn, _) do
    {:ok, _user} = Accounts.delete_user(user)
    send_resp(conn, :no_content, "")
  end
end
