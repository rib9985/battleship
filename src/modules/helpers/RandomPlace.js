export default function getRandomPlace() {
  const placeRow = Math.floor(Math.random() * 10);
  const placeColumn = Math.floor(Math.random() * 10);
  const verticalPlace = getRandomInt === 0;

  const placeFields = { placeRow, placeColumn, verticalPlace };
  return placeFields;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
