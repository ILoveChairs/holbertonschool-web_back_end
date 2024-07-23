/* eslint-disable no-underscore-dangle */
export default function createInt8TypedArray(length, position, value) {
  const int8 = new Int8Array(length);
  int8[position] = value;
  return int8;
}
