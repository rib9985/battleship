export default class Gameboard {
  constructor(x = 9, y = 9, computer = false, isVertical = false) {
    this.boardSize = [x, y];
    this.x = this.generateArray(x);
    this.y = this.generateArray(y);
    this.computer = computer;
    this.isVerticalPlace = isVertical;
  }

  generateArray(size) {
    const array = new Array(size);
    array.fill(0);
    return array;
  }

  resetBoard() {
    this.x = this.generateArray(this.boardSize[0]);
    this.y = this.generateArray(this.boardSize[1]);
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

  checkIfPositionEmpty(x, y) {
    if (this.x[x] == 0 || this.y[y] == 0) {
      return true;
    } else {
      return false;
    }
  }

  avaliableShipsToPlace() {
    const ships = [
      "carrier",
      "battleship",
      "cruiser",
      "submarine",
      "destroyer",
    ];
  }

  placeShip(ship) {
    let placeAt = null;
    if (this.isVerticalPlace == true) {
      placeAt = y;
    } else {
      placeAt = x;
    }
  }
}
