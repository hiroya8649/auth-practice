defmodule Auth.Recaptcha do
  alias HTTPoison

  @private_key System.get_env("AuthRecaptchaPrivateKey")
  @url "https://www.google.com/recaptcha/api/siteverify"

  def validate_token(token) do
    params = [secret: @private_key, response: token]
    {:ok, %{body: body}} = HTTPoison.post(@url, "{}", [{"Accept", "application/json"}], [ params: params, ssl: [{:versions, [:'tlsv1.2']}] ])
    Jason.decode(body)
  end
end