export default class Ship {
  constructor(length, hits = 0, sunk = false, vertical = false) {
    this.length = length;
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
