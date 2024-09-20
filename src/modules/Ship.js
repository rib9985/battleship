export default class Ship {
  constructor(shipClass, length, hits = 0, sunk = false) {
    this.length = length;
    this.shipClass = shipClass;
    this.hits = hits;
    this.sunk = sunk;
  }

  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
      return true;
    } else {
      return;
    }
  }

  hit() {
    if (this.isSunk()) {
      return;
    } else {
      this.hits += 1;
      this.isSunk();
    }
  }
}
