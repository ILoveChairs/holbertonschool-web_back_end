/* eslint-disable no-underscore-dangle */
export default function getStudentsByLocation(arrayOfObjects, city) {
  return arrayOfObjects.filter((student) => student.location === city);
}
