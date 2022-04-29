const explorerController = require('./../../lib/controllers/ExplorerController');

describe('Test for the ExplorerController module', () => {
  test('1. Get Explorers By Mission', () => {
    const test = explorerController.getExplorersByMission('node')
    expect(test[0].name).toBe('Woopa1')
  });

  test('2. Get Explorers Usrname By Mission', () => {
    const test = explorerController.getExplorersUsernamesByMission('node')
    expect(test).toContain('ajolonauta1')
    expect(test).not.toContain('ajolonauta9')
  });
});
