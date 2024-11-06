import Gameboard from "../Gameboard";

const tempBoard = new Gameboard();

export default function randomShips() {
  tempBoard.placeShipsRandom();
  const availableShips = tempBoard.availableShips;
  const placedShips = tempBoard.placedShips;
  const board = tempBoard.board;

  return { board, ships, availableShips, placedShips };
}
