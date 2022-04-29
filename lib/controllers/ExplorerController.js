const reader = require('./../utils/Reader');
const explorerService = require('./../services/ExplorerService');
const fizzBuzzService = require('./../services/FizzBuzzService');

class explorerController {
  static getExplorersByMission (mission){
    const explorers = reader.readJsonFile('./data/explorers.json')
    const explorersByMission = explorerService.filterByMission(explorers, mission)
    return explorersByMission
  }

  static getExplorersUsernamesByMission (mission){
    const explorers = reader.readJsonFile('./data/explorers.json')
    const explorersUsernamesByMission = explorerService.getExplorersUsernamesByMission(explorers, mission)
    return explorersUsernamesByMission
  }

  static getExplorersAmountByMission (mission){
    const explorers = reader.readJsonFile('./data/explorers.json')
    const explorersAmountByMission = explorerService.getAmountOfExplorersByMission(explorers, mission)
    return explorersAmountByMission
  }
}

module.exports = explorerController
