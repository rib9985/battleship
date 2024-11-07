import Gameboard from "../Gameboard";
export default function randomShips() {
  const tempBoard = new Gameboard();
  tempBoard.placeShipsRandom();
  const availableShips = tempBoard.availableShips;
  const placedShips = tempBoard.placedShips;
  const board = tempBoard.board;

  return { availableShips, placedShips, board };
}
