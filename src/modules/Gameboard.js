import Ship from "./Ship";

export default class Gameboard {
  constructor(rows = 10, columns = 10, isVertical = false) {
    this.boardSize = [rows, columns];
    this.board = this.generateBoardArray(rows, columns);
    this.ships = this.shipFleet();
    this.isVerticalPlace = isVertical;
  }

  generateBoardArray(rows, columns) {
    return Array.from({ length: rows }, () => new Array(columns).fill(0));
  }

  resetBoard() {
    this.board = this.generateBoardArray(this.boardSize[0], this.boardSize[1]);
    this.ships = this.shipFleet();
  }

  checkWithinBoundsX(shipLength) {
    const finalLength = length + this.board[0];
    if (finalLength > this.x.length || finalLength < 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWithinBoundsY(shipLength) {
    const finalLength = length + this.board[1];
    if (finalLength > this.y.length || finalLength < 0) {
      return false;
    } else {
      return true;
    }
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

  shipFleet() {
    const carrier = new Ship("carrier", 4);
    const battleship = new Ship("battleship", 3);
    const cruiser = new Ship("cruiser", 2);
    const submarine = new Ship("submarine", 1);

    const fleet = [
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

    return fleet;
  }

  getShip(ship) {
    let shipReturn = null;
    const shipFound = this.ships.find((element) => {
      element.shipClass == ship;
    });
    if (shipFound) {
      shipReturn = shipFound;
      const index = this.ships.indexOf(ship);
      this.ships[index] = 0;
    }
    return shipReturn;
  }

  placeShip(ship) {
    let placeAt = null;
    if (this.isVerticalPlace == true) {
      placeAt = y;
    } else {
      placeAt = x;
    }
  }

  receiveAttack(x, y) {
    if (x < 0 || y < 0 || x > this.boardSize[0] || y > this.boardSize[1]) {
      return null;
    }
    if (checkCoordsForHit(x, y)) {
      hitShip();
    }
  }

  checkCoordsForHit(x, y) {
    if (this.x[x] && this.y[y] == 1) {
      return null;
    }
    if (this.x[x] && this.y[y] == 0) {
      this.markPosition(x, y);
      return null;
    }
    if (this.x[x] && this.y[y] == typeof Object) {
      this.markAsHit(x, y);
      return true;
    }
  }

  markPosition(x, y) {
    this.x[x] = 1;
    this.y[y] = 1;
  }
}
