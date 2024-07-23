/* eslint-disable no-underscore-dangle */
export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const output = [];
  for (const word of set) {
    const idx = word.indexOf(startString);
    if (idx === 0) {
      output.push(word.slice(startString.length));
    }
  }
  return output.join('-');
}
