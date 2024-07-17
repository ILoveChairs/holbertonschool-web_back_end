export default function appendToEachArrayValue(array, appendString) {
  let arrayCpy;
  for (const value of array) {
    if (arrayCpy === undefined) {
      arrayCpy = [];
    }
    arrayCpy.push(appendString + value);
  }

  return arrayCpy;
}
