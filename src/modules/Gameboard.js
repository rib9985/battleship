import Ship from "./Ship";

export default class Gameboard {
  constructor(rows = 10, columns = 10, isVertical = false) {
    this.boardSize = [rows, columns];
    this.board = this.generateBoardArray(rows, columns);
    this.isVerticalPlace = isVertical;
    this.availableShips = this.shipFleet();
    this.placedShips = [];
    this.sunkShips = [];
  }

  generateBoardArray(rows, columns) {
    return Array.from({ length: rows }, () => new Array(columns).fill(0));
  }

  shipFleet() {
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

    const fleet = [
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

    return fleet;
  }

  resetBoard() {
    this.board = this.generateBoardArray(this.boardSize[0], this.boardSize[1]);
    this.availableShips = this.shipFleet();
    this.placedShips = [];
    this.sunkShips = [];
  }

  checkIfPositionEmpty(row, column) {
    if (row > 9 || column > 9 || row < 0 || column < 0) {
      throw new Error("Row/Column out of bounds");
    }
    if (this.board[row][column] == 0) {
      return true;
    } else {
      return false;
    }
  }

  checkFleetPlace() {
    if (this.availableShips.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  inBounds(row, column, ship) {
    const shipLen = ship.length;
    const finalRow = this.isVerticalPlace ? row + shipLen : row;
    const finalColumn = this.isVerticalPlace ? column : column + shipLen;
    if (finalRow <= this.boardSize[0] && finalColumn <= this.boardSize[1]) {
      return true;
    } else {
      return false;
    }
  }

  placeShip(ship, row, column) {
    const isEmpty = this.checkIfPositionEmpty(row, column);
    const inBounds = this.inBounds(row, column, ship);
    if (isEmpty && inBounds) {
      this.removeFromFleet(ship);
      this.updateBoardWithShip(ship, row, column);
      return true;
    } else {
      return false;
    }
  }

  updateBoardWithShip(ship, row, column) {
    const shipLen = ship.length;
    const isVertical = this.isVerticalPlace;

    if (isVertical) {
      for (let index = 0; index < shipLen; index++) {
        this.board[row + index][column] = ship;
      }
    } else {
      for (let index = 0; index < shipLen; index++) {
        this.board[row][column + index] = ship;
      }
    }
  }

  removeFromFleet(ship) {
    const index = this.availableShips.indexOf(ship);
    const placed = this.availableShips.splice(index, 1);
    this.placedShips.push(placed);
  }

  moveToSunk(ship) {
    const index = this.placedShips.indexOf(ship);
    const sunk = this.availableShips.splice(index, 1);
    this.sunkShips.push(sunk);
  }

  receiveAttack(row, column) {
    const hitCheck = this.checkForHit(row, column);
    if (hitCheck == false) {
      this.markPosition(row, column);
    }
    if (typeof hitCheck == "object") {
      this.shipWasHit(hitCheck);
      this.markHit(row, column);
    }
    if (hitCheck == null) {
      return null;
    }
  }

  shipWasHit(ship) {
    ship.hit();
    this.isShipSunk(ship);
  }

  isShipSunk(ship) {
    if (ship.isSunk()) {
      this.moveToSunk(ship);
    }
  }

  checkForHit(row, column) {
    if (this.board[row][column] == 1) {
      return null;
    }
    if (this.board[row][column] == 0) {
      return false;
    }
    if (typeof this.board[row][column] == "object") {
      const ship = this.board[row][column];
      return ship;
    }
  }

  markPosition(row, column) {
    this.board[row][column] = 1;
  }

  markHit(row, column) {
    this.board[row][column] = 2;
  }
}
