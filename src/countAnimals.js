const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const ChaveFormada = species.reduce((accumulator, current) => {
      accumulator[current.name] = current.residents.length;
      return accumulator;
    }, {});
    return ChaveFormada;
  }
  const cadaEspecie = species.find((specie) => specie.name === animal.specie);

  const cadaEspecieGenre = cadaEspecie.residents.filter((specieGenre) =>
    specieGenre.sex === animal.sex);

  return (animal.specie && animal.sex) ? cadaEspecieGenre.length : cadaEspecie.residents.length;
}

module.exports = countAnimals;
