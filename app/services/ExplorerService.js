const reader = require('./app/module/Reader');

class explorerService {
  static filterByMission(explorers, mission){
    const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
  }
}
module.exports = explorerService
