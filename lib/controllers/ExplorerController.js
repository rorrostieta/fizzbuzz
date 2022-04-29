const reader = require('./../utils/Reader');
const explorerService = require('./../services/ExplorerService');
const fizzBuzzService = require('./../services/FizzBuzzService');

class explorerController {
  static getExplorersByMission (mission){
    const explorers = reader.readJsonFile('./data/explorers.json')
    const explorersByMission = explorerService.filterByMission(explorers, mission)
    return explorersByMission
  }
}

module.exports = explorerController
