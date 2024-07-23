/* eslint-disable no-underscore-dangle */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const dv = new DataView(new ArrayBuffer(length));
  dv.setInt8(position, value);
  return dv;
}
