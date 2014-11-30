use Mix.Config

config :phoenix, Gomoku.Router,
  http: [port: System.get_env("PORT") || 4001]
