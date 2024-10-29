//TODO: create method to reset board
//TODO: create method to call random placements
//TODO: create method to call other player board
//
import randomiseShipPlace from "./RandomShips";
export default class DomMethods {
  static attachResetListener() {
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => this.resetGame());
  }

  static attachRandomShipListener() {
    const randomiseButton = document.getElementById("randomiseButton");
    randomiseButton.addEventListener("click", () => this.randomiseBoard());
  }

  static resetGame() {
    this.resetBoard();
    this.resetShipQuantities();
  }

  static getColumnRow(columnNumber, rowNumber) {
    const element = document.querySelector(
      `.column-${columnNumber} .row-${rowNumber}`,
    );

    return element;
  }

  static getPlayerGrid(player) {
    return document.getElementById(`${player}Grid`);
  }

  static getShipQuantityDiv(shipId) {
    return document.getElementById(`${shipId}Quantity`);
  }

  static setShipQuantityDiv(shipId, quantity) {
    this.getShipQuantityDiv(shipId).innerText = `x${quantity}`;
  }

  static addEventListenersToGrid(grid) {
    grid.addEventListener("click", function (event) {
      event.preventDefault();
    });
  }

  //FIX: Setup a way to set the shipId to match a ship fleet
  static setCellShip(cell, shipId) {
    cell.classList.add(`occupied-${shipId}`);
  }

  static setCellOccupied(cell) {
    cell.classList.add("occupied");
  }

  static checkCellOccupied(cell) {
    if (cell.classList.contains("occupied")) {
      return true;
    } else {
      return false;
    }
  }

  static getOccupiedCells() {
    const cells = document.querySelectorAll(".occupied");
    return cells;
  }

  static resetBoard() {
    const cells = this.getOccupiedCells();
    cells.forEach((cell) => {
      cell.classList.remove("occupied");
      cell.classList.remove("occupied-battleship");
      cell.classList.remove("occupied-carrier");
      cell.classList.remove("occupied-submarine");
      cell.classList.remove("occupied-cruiser");
    });
  }

  static resetShipQuantities() {
    const submarineQuantity = 2;
    const carrierQuantity = 1;
    const battleshipQuantity = 2;
    const cruiserQuantity = 2;

    const submarine = document.getElementById("submarineQuantity");
    submarine.innerHTML = `x${submarineQuantity}`;

    const carrier = document.getElementById("carrierQuantity");
    carrier.innerHTML = `x${carrierQuantity}`;

    const battleship = document.getElementById("battleshipQuantity");
    battleship.innerHTML = `x${battleshipQuantity}`;

    const cruiser = document.getElementById("cruiserQuantity");
    cruiser.innerHTML = `x${cruiserQuantity}`;
  }

  static randomiseBoard() {
    randomiseShipPlace();
  }
}
