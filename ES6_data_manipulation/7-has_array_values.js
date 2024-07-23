/* eslint-disable no-underscore-dangle */
export default function hasValuesFromArray(set, array) {
  let bool = true;
  const settedArray = new Set(array);
  for (const element of settedArray) {
    if (!set.has(element)) {
      bool = false;
    }
  }
  return bool;
}
