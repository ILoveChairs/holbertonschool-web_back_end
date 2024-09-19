const fs = require('node:fs/promises');

function countStudents(path) {
  // Print
  function printer(data) {
    const lines = data.split('\n');

    // Remove empty spaces
    for (const lineN in lines) {
      if (Object.hasOwn(lines, lineN)) {
        if (lines[lineN].trim() === '') {
          lines.splice(lineN, 1);
        }
      }
    }

    // Number of students
    const studentsTotal = lines.length - 1;
    console.log(`Number of students: ${studentsTotal}`);

    // Divide into students
    lines.splice(0, 1);
    const students = [];
    for (const line of lines) {
      students.push(line.split(','));
    }

    // Divide into fields
    const fields = {};
    for (const student of students) {
      // [0] is first name, [3] is field
      if (!(student[3] in fields)) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }

    // Print classes
    for (const field in fields) {
      if (Object.hasOwn(fields, field)) {
        const numOfStudents = fields[field].length;
        const listOfFirstNames = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${numOfStudents}. List: ${listOfFirstNames}`);
      }
    }
  }

  // Read csv
  function reader() {
    try {
      return new Promise((resolve) => {
        fs.readFile(path, { encoding: 'utf8' }).then((data) => { printer(data); });
        resolve();
      });
    } catch (err) {
      throw Error('Cannot load the database');
    }
  }

  return reader()
}

module.exports = countStudents;
