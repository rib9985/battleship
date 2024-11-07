import randomShips from "../modules/dom/RandomShips";
import { jest } from "@jest/globals";

const ships = randomShips();

test("expect correct array lengths", () => {
  expect(ships.placedShips.length).toBe(10);
  expect(ships.availableShips.length).toBe(0);
});

console.log(ships);
