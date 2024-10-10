import DomMethods from "./Dom";
//TODO: create function to check quantities of the ship
//TODO: create function to update quantities of the ship 
//TODO: create function to reset board 
//FIX: are event listeners duped?
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
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();

  const data = JSON.parse(event.dataTransfer.getData("text"));
  const shipId = data.shipId;
  const shipLength = data.shipLength;
  const targetCell = event.target;
  const isOccupied = checkCellOccupied(targetCell);

  if (isOccupied) {
    return;
  } else {
    const targetRow = targetCell.className;
    const targetColumn = targetCell.parentElement.className;

    const rowNumber = parseInt(targetRow.split(" ")[0].split("-")[1]);
    const columnNumber = parseInt(targetColumn.split(" ")[0].split("-")[1]);
    
//TODO: add setShip function here
    if checkWithinBounds(rowNumber,columnNumber,shipLength){

    }

  }
  console.log(targetRow);
  console.log(targetColumn);
}

function checkWithinBounds(posRow, posColumn, shipLength) {
  const isVertical = getIsVertical();
  if (isVertical) {
    posCheck = posColumn;
  } else {
    posCheck = posRow;
  }
  if (posCheck + shipLength <= 10) {
    for (let index = 0; index < shipLength; index++) {
      let cell = isVertical
        ? DomMethods.getColumnRow(posColumn + index, posRow)
        : DomMethods.getColumnRow(posColumn, posRow + index);
      if (checkCellOccupied(cell)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function getIsVertical() {
  const checkbox = document.getElementById("verticalPlace");
  if (checkbox.getAttribute("checked")) {
    return true;
  } else {
    return false;
  }
}

//TODO: create a function to set cells as occupied by ships, both in row/vertical

function setShip(shipLength, shipId){



}

//TODO: create function to check quantities of the ship
//TODO: create function to update quantities of the ship 
//TODO: create function to reset board 
function setCellOccupied(cell) {
  cell.classList.add("occupied");
}

function checkCellOccupied(cell) {
  if (cell.classList.contains("occupied")) {
    return true;
  } else {
    return false;
  }
}
