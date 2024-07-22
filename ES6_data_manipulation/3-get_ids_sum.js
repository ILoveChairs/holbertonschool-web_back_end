/* eslint-disable no-underscore-dangle */
export default function getStudentIdsSum(arrayOfObjects) {
  return arrayOfObjects.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);
}
