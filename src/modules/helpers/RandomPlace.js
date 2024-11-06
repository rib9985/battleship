export default function getRandomPlace() {
  const placeRow = Math.floor(Math.random * 9);
  const placeColumn = Math.floor(Math.random * 9);
  const verticalPlace = () =>
    Math.floor(Math.random()) ? 1 == true : 0 == false;

  const placeParams = { placeRow, placeColumn, verticalPlace };
  return placeParams;
}
