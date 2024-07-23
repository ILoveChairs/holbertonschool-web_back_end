/* eslint-disable no-underscore-dangle */
export default function hasValuesFromArray(set, array) {
  return new Set(set).isSupersetOf(new Set(array));
}
