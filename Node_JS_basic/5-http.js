const fs = require('node:fs/promises');
const http = require('http');

const port = 1245;
const db = process.argv[2];

/* Students Database Fetch */
async function readStudentsDB(path) {
  // Print
  function printer(data) {
    const outputList = [];
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
    outputList.push(`Number of students: ${studentsTotal}`);

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
        outputList.push(`Number of students in ${field}: ${numOfStudents}. List: ${listOfFirstNames}`);
      }
    }

    return outputList.join('\n');
  }

  // Read csv
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    return printer(data);
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

/* Server Configuration */
const app = http.createServer(async (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    res.statusCode = 200;
    res.write('Hello Holberton School!');
    res.end();
  } else if (endpoint === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    try {
      res.write(await readStudentsDB(db))
    } catch (err) {
      res.write(err.message)
    }
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(port);

module.exports = app;
