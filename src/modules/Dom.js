export default class DomMethods {
  static getColumnRow(columnNumber, rowNumber) {
    return document.querySelector(`.column-${columnNumber} .row-${rowNumber}`);
  }

  static getPlayerGrid(player) {
    return document.getElementById(`${player}Grid`);
  }

  static addEventListenersToGrid(grid) {
    grid.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(event.target); // Log the clicked target
    });
  }
}
