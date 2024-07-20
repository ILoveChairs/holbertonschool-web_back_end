export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value === 'number') {
      throw new TypeError('name must be an number');
    }
    this._length = value;
  }

  set students(value) {
    if (typeof value === 'number') {
      throw new TypeError('name must be a number');
    }
    this._students = value;
  }
}
