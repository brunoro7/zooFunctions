const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const estaEmAlgumManager = employees.some((index) => index.managers.includes(id));
  return (estaEmAlgumManager);
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const funcionarioId = employees.find((funcionario) => funcionario.id === managerId);
  const listaFuncionariosManager = employees
    .filter((index) => index.managers.includes(funcionarioId.id));
  return listaFuncionariosManager.map((funcionarioManager) =>
    `${funcionarioManager.firstName} ${funcionarioManager.lastName}`);
}
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };

// 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'
// '9e7d4524-363c-416a-8759-8aa7e50c0992'
