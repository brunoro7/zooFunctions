const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function filtraObjeto(info) {
  const employee = employees.find(({ id, firstName, lastName }) =>
    id === info.id || firstName === info.name || lastName === info.name);
  if (employee) {
    const responsAnimais = species.filter((animalRep) =>
      employee.responsibleFor.includes(animalRep.id));
    const nomeAnimalFiltrado = responsAnimais.map((animalFiltrado) => animalFiltrado.name);
    const localAnimalFiltrado = responsAnimais.map((localAnimal) => localAnimal.location);
    const objBase = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: nomeAnimalFiltrado,
      locations: localAnimalFiltrado,
    };
    return objBase;
  }
  throw new Error('Informações inválidas');
}
function getEmployeesCoverage(info) {
  if (info) {
    return filtraObjeto(info);
  }
  return employees.map((employee) => filtraObjeto({ name: employee.lastName }));
}
module.exports = getEmployeesCoverage;
