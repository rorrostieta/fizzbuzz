const reader = require('./../../app/module/Reader');
const explorerService = require('./../../app/services/ExplorerService');

describe('Filter and mapping operations', () => {
  test('1. Filter by Mission', () => {
    const explorers = reader.readJsonFile('./data/explorers.json')
    const test = explorerService.filterByMission(explorers, 'node')
    expect(test[0].name).toBe('Woopa1')
  });

  test('2. Get amount by Mission', () => {
    const explorers = reader.readJsonFile('./data/explorers.json')
    const test = explorerService.getAmountOfExplorersByMission(explorers, 'node')
    expect(test).toBe(10)
  });
});
