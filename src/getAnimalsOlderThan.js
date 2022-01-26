const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const listaEspecies = (data.species);
  listaEspecies.name = animal;

  console.log(listaEspecies);
}
getAnimalsOlderThan();

module.exports = getAnimalsOlderThan;
