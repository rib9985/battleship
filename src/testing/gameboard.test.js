import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";
const testGameboard = new Gameboard();

const carrier = new Ship("carrier", 4);
const battleshipOne = new Ship("battleshipOne", 3);
const battleshipTwo = new Ship("battleshipTwo", 3);
const cruiserOne = new Ship("cruiserOne", 2);
const cruiserTwo = new Ship("cruiserTwo", 2);
const cruiserThree = new Ship("cruiserThree", 2);
const submarineOne = new Ship("submarineOne", 1);
const submarineTwo = new Ship("submarineTwo", 1);
const submarineThree = new Ship("submarineThree", 1);
const submarineFour = new Ship("submarineFour", 1);

const shipFleet = [
  carrier,
  battleshipOne,
  battleshipTwo,
  cruiserOne,
  cruiserTwo,
  cruiserThree,
  submarineOne,
  submarineTwo,
  submarineThree,
  submarineFour,
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
    isVerticalPlace: false,
    availableShips: shipFleet,
    placedShips: [],
    sunkShips: [],
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

test("checks if ship is not out of bounds", () => {
  expect(testGameboard.inBounds(5, 0, submarineOne)).toBe(true);
  expect(testGameboard.inBounds(0, 0, submarineOne)).toBe(true);
  expect(testGameboard.inBounds(9, 9, submarineOne)).toBe(true);
  expect(testGameboard.inBounds(0, 9, carrier)).toBe(false);
  expect(testGameboard.inBounds(5, 1, carrier)).toBe(true);
  testGameboard.isVerticalPlace = true;
  expect(testGameboard.inBounds(9, 0, carrier)).toBe(false);
  expect(testGameboard.inBounds(0, 9, carrier)).toBe(true);
});

test("places ship", () => {
  expect(testGameboard.placeShip(submarineOne, 0, 9)).toBe(true);
  expect(testGameboard.placeShip(submarineOne, 0, 9)).toBe(false);
  expect(testGameboard.inBounds(9, 0, carrier)).toBe(false);
  expect(testGameboard.checkIfPositionEmpty(9, 0)).toBe(true);

  expect(testGameboard.placeShip(carrier, 9, 0)).toBe(false);
  expect(testGameboard.placeShip(carrier, 1, 1)).toBe(true);
});
