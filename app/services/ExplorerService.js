const reader = require('./../module/Reader');

class explorerService {
  static filterByMission(explorers, mission){
    const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
    return explorersInMission
  }
}
module.exports = explorerService
