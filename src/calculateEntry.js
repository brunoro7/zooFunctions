const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const listaDeEntradas = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  const pivetes = entrants.filter((indexEntrants) => (indexEntrants.age < 18));
  listaDeEntradas.child = pivetes.length;
  const tiozinhos = entrants.filter((indexEntrants) => (indexEntrants.age >= 50));
  listaDeEntradas.senior = tiozinhos.length;
  const joviais = entrants.filter((indexEntrants) =>
    (indexEntrants.age < 50) && (indexEntrants.age >= 18));
  listaDeEntradas.adult = joviais.length;

  return listaDeEntradas;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const listaDeEntradas = countEntrants(entrants);
  listaDeEntradas.child *= prices.child;
  listaDeEntradas.adult *= prices.adult;
  listaDeEntradas.senior *= prices.senior;
  const result = (listaDeEntradas.child + listaDeEntradas.adult + listaDeEntradas.senior);

  return result;
}

module.exports = { calculateEntry, countEntrants };
