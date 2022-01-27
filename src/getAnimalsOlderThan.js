const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  species.forEach((specie) => {
    
    console.log(specie.residents);
  });
}
getAnimalsOlderThan('penguins', 9);

module.exports = getAnimalsOlderThan;

// const listaEspecies = (data.species);

// for (let i = 0; i < listaEspecies.length; i += 1) {
//   const nomeAnimal = listaEspecies[i];
//   const animaisResidentes = Object.values(nomeAnimal.residents);

//   if (animal === nomeAnimal.name) {
//     console.log(animaisResidentes);
//     return Object.entries(nomeAnimal);
//   }
// }
