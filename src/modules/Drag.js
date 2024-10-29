import DomMethods from "./Dom";
//TODO: create function to check quantities of the ship
//TODO: create function to update quantities of the ship
//PERF: maybe refactor into a class to contain the functions better ?

export default function attachListeners() {
  const ships = document.querySelectorAll(
    '.shipContainer > [draggable="true"]',
  );

  ships.forEach((ship) => {
    ship.addEventListener("dragstart", dragStart);
  });

  const grid = DomMethods.getPlayerGrid("playerOne");
  const gridCells = grid.querySelectorAll(".column > div");

  gridCells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("drop", drop);
  });
}

function dragStart(event) {
  const shipId = event.target.id;
  const shipLength = event.target.children.length;
  event.dataTransfer.setData("text", JSON.stringify({ shipId, shipLength }));
  event.dataTransfer.effectAllowed = "move";
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  const data = event.dataTransfer.getData("text");
  const dataJson = JSON.parse(data);
  const shipId = dataJson.shipId;
  const shipLength = dataJson.shipLength;
  const targetCell = event.target;
  const isOccupied = DomMethods.checkCellOccupied(targetCell);

  if (isOccupied) {
    return;
  }
  if (!checkIfQuantityValid(shipId)) {
    return;
  } else {
    const targetRow = targetCell.className;
    const targetColumn = targetCell.parentElement.className;

    const rowNumber = parseInt(targetRow.split(" ")[0].split("-")[1]);
    const columnNumber = parseInt(targetColumn.split(" ")[0].split("-")[1]);

    if (checkWithinBounds(rowNumber, columnNumber, shipLength)) {
      setShip(columnNumber, rowNumber, shipLength, shipId);
      updateShipQuantity(shipId);
    }
  }
}

function checkWithinBounds(posRow, posColumn, shipLength) {
  let posCheck = posColumn;
  const isVertical = isVerticalPlace();
  if (isVertical) {
    posCheck = posRow;
  }
  const finalOccupyLength = posCheck + shipLength;
  if (finalOccupyLength <= 10) {
    for (let index = 0; index < shipLength; index++) {
      let cell = null;
      if (isVertical) {
        cell = DomMethods.getColumnRow(posColumn, posRow + index);
      } else {
        cell = DomMethods.getColumnRow(posColumn + index, posRow);
      }
      if (DomMethods.checkCellOccupied(cell)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function setShip(columnNumber, rowNumber, shipLength, shipId) {
  if (isVerticalPlace()) {
    for (let index = 0; index < shipLength; index++) {
      let cell = DomMethods.getColumnRow(columnNumber, rowNumber + index);
      DomMethods.setCellShip(cell, shipId);
      DomMethods.setCellOccupied(cell);
    }
  } else {
    for (let index = 0; index < shipLength; index++) {
      let cell = DomMethods.getColumnRow(columnNumber + index, rowNumber);
      DomMethods.setCellShip(cell, shipId);
      DomMethods.setCellOccupied(cell);
    }
  }
}

function getShipQuantity(shipId) {
  const shipQuantityDiv = DomMethods.getShipQuantityDiv(shipId);
  if (shipQuantityDiv == null || shipQuantityDiv == 0) {
    return 0;
  }
  const divText = shipQuantityDiv.innerText;
  const quantity = parseInt(divText.split("")[1]);
  return quantity;
}

function updateShipQuantity(shipId) {
  const shipQuantity = getShipQuantity(shipId);
  const currentNum = shipQuantity - 1;
  DomMethods.setShipQuantityDiv(shipId, currentNum);
}

function checkIfQuantityValid(shipId) {
  if (getShipQuantity(shipId) > 0) {
    return true;
  } else {
    return false;
  }
}

function isVerticalPlace() {
  const checkbox = document.getElementById("verticalPlace");
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}
