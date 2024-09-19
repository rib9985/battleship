export default class Ship {
  constructor(shipClass, length, hits = 0, sunk = false, vertical = false) {
    this.length = length;
    this.shipClass = shipClass;
    this.hits = hits;
    this.sunk = sunk;
  }

  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
    } else {
      return;
    }
  }

  hits() {
    this.hits += 1;
  }
}
