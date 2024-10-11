//TODO: create function to reset board
export default class DomMethods {
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
}
