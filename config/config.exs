# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.


# General application configuration
use Mix.Config

config :auth,
  ecto_repos: [Auth.Repo]

# Configures the endpoint
config :auth, AuthWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "0KW95zWdx3Rg0ZK55r3BWTeWtifVO7Ccc86OT4nDR+oYhatd3rJaAlnNSf0wAGvP",
  render_errors: [view: AuthWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Auth.PubSub, adapter: Phoenix.PubSub.PG2]

# Phauxth authentication configuration
config :phauxth,
  user_context: Auth.Accounts,
  crypto_module: Comeonin.Argon2,
  token_module: AuthWeb.Auth.Token

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
