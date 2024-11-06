import Player from "./Player";

export default function instatiatePlayer(playerName) {
  const player = new Player(`${playerName}`, false);
  return player;
}

const playerOne = instatiatePlayer(playerOne);
const playerTwo = instatiatePlayer(playerTwo);

function playerReceivesAttack(player, row, column) {
  const gameboard = player.gameboard;
  const result = gameboard.receiveAttack(row, column);
  return result;
}

function playRound() {}
