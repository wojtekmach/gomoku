defmodule GomokuTest do
  use Gomoku.ConnCase

  test "GET /" do
    conn = get conn, "/"
    
    assert html_response(conn, 200) =~ "Gomoku"
  end
end
