const reader = require('./../module/Reader');

class explorerService {
  static filterByMission(explorers, mission){
    const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
    return explorersInMission
  }

  static getAmountOfExplorersByMission(explorers, mission){
    const explorersByMission = explorerService.filterByMission(explorers, mission)
    return explorersByMission.length
  }
}
module.exports = explorerService
