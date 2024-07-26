export default function createIteratorObject(report) {
  const iterator = {
    * [Symbol.iterator]() {
      for (const department in report.allEmployees) {
        if (Object.hasOwn(report.allEmployees, department)) {
          for (const employee in report.allEmployees[department]) {
            if (Object.hasOwn(report.allEmployees[department], employee)) {
              yield report.allEmployees[department][employee];
            }
          }
        }
      }
    },
  };

  return iterator;
}
