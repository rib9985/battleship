import Gameboard from "./Gameboard";

export default class Player {
  constructor(playerName, isComputer = false, gameboard = new Gameboard()) {
    this.playerName = playerName;
    this.computer = isComputer;
    this.gameboard = gameboard;
  }
}
