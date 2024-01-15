let username = null;

if (username === null) {
  username = prompt("Enter username");
  localStorage.setItem("username", username);
}

if (username) {
  const ws = connectWs(username, displayPlayers);
  const board = initBoard(username);
  game(ws, board);
}
