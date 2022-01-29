const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalFuncionario = employees.find((empregado) => empregado.id === id).responsibleFor[0];
  const firstAnimalFuncionario = species.find((firstAnimal) =>
    firstAnimal.id === animalFuncionario);
  const saidaDoVelho = firstAnimalFuncionario.residents.reduce((acc, current) =>
    (current.age > acc.age ? current : acc));
  return Object.values(saidaDoVelho);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
