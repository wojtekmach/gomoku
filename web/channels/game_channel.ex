defmodule Gomoku.GameChannel do
  use Phoenix.Channel

  def join(socket, topic, message) do
    { :ok, socket }
  end
end
