const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const listaEmploye = (data.employees);
  if (employeeName === undefined) return {};
  for (let i = 0; i < listaEmploye.length; i += 1) {
    const employFirst = listaEmploye[i].firstName;
    const employLast = listaEmploye[i].lastName;

    if (employeeName === employFirst || employeeName === employLast) {
      return listaEmploye[i];
    }
  }
}

module.exports = getEmployeeByName;
