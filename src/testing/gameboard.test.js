import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";
const testGameboard = new Gameboard();

const carrier = new Ship("carrier", 4);
const battleship = new Ship("battleship", 3);
const cruiser = new Ship("cruiser", 2);
const submarine = new Ship("submarine", 1);

const shipFleet = [
  carrier,
  battleship,
  battleship,
  cruiser,
  cruiser,
  cruiser,
  submarine,
  submarine,
  submarine,
  submarine,
];

test("check if board is created correctly", () => {
  expect(testGameboard).toEqual({
    boardSize: [10, 10],
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    ships: shipFleet,
    isVerticalPlace: false,
  });
});

test("checks if positions are empty", () => {
  expect(testGameboard.checkIfPositionEmpty(1, 3)).toBe(true);
  expect(testGameboard.checkIfPositionEmpty(9, 9)).toBe(true);
  expect(testGameboard.checkIfPositionEmpty(7, 9)).toBe(true);
  expect(testGameboard.checkIfPositionEmpty(9, 7)).toBe(true);
});

test("checks if negative values throws", () => {
  expect(() => testGameboard.checkIfPositionEmpty(15, 1).toThrow(Error));
  expect(() => testGameboard.checkIfPositionEmpty(-20, 0).toThrow(Error));
  expect(() => testGameboard.checkIfPositionEmpty(35, -1).toThrow(Error));
});
