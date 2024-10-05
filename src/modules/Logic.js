import Player from "./Player";

export default function main() {
  startGame();
}

function startGame() {}

function instatiatePlayer(playerName) {
  const playerOne = new Player(`${playerName}`, false);
  return playerOne;
}

const playerOne = instatiatePlayer(playerOne);
const playerTwo = instatiatePlayer(playerTwo);

function playerReceivesAttack(player, row, column) {
  const gameboard = player.gameboard;
  const result = gameboard.receiveAttack(row, column);
  return result;
}

function playRound() {}
