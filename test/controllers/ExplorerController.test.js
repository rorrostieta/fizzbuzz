// const reader = require('./../../lib/utils/Reader');
// const explorerService = require('./../../lib/services/ExplorerService');
// const fizzBuzzService = require('./../../lib/services/FizzBuzzService');
const explorerController = require('./../../lib/controllers/ExplorerController');

describe('Test for the ExplorerController module', () => {
  test('1. Get Explorers By Mission', () => {
    const test = explorerController.getExplorersByMission('node')
    expect(test[0].name).toBe('Woopa1')
  });
});
