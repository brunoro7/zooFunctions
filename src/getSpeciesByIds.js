const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const listaEspecies = (data.species);
  for (let i = 0; i < listaEspecies.length; i += 1) {
    const idCadaEspecie = listaEspecies[i].id;
    const cadaEspecieId = listaEspecies[i];
    if (ids.length <= 0) {
      return [];
    }
    if (ids[0] === idCadaEspecie) {
      return [cadaEspecieId];
    }
  }
}
getSpeciesByIds();
getSpeciesByIds('78460a91-f4da-4dea-a469-86fd2b8ccc84', '0938aa23-f153-4937-9f88-4858b24d6bce');

module.exports = getSpeciesByIds;
// '89be95b3-47e4-4c5b-b687-1fabf2afa274'
// '78460a91-f4da-4dea-a469-86fd2b8ccc84'
