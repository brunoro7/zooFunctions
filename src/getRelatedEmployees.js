const { employees } = require('../data/zoo_data');

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
module.exports = { isManager, getRelatedEmployees };
