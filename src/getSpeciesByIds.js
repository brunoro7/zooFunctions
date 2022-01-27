const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  if (ids.length <= 0) {
    return result;
  }
  if (ids.length === 1) {
    return [species.find((specie) => specie.id === ids[0])];
  }
  ids.forEach((id) => {
    result.push(species.find((specie) => specie.id === id));
  });
  return result;
}

module.exports = getSpeciesByIds;
// '89be95b3-47e4-4c5b-b687-1fabf2afa274'
// '78460a91-f4da-4dea-a469-86fd2b8ccc84'
