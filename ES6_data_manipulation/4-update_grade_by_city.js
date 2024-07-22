/* eslint-disable no-underscore-dangle */
export default function updateStudentGradeByCity(arrayOfObjects, city, newGrades) {
  return arrayOfObjects.filter(
    (student) => student.location === city,
  ).map(
    (student) => {
      const grade = newGrades.filter((grade) => grade.studentId === student.id);
      const studentCopy = { ...student };
      if (grade.length === 0) {
        studentCopy.grade = 'N/A';
      } else {
        studentCopy.grade = grade[0].grade;
      }
      return studentCopy;
    },
  );
}
