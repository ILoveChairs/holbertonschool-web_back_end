/* eslint-disable no-underscore-dangle */
export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }

  return arrayOfObjects.map((x) => x.id);
}
