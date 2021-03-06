const reader = require("./../utils/Reader");
const explorerService = require("./../services/ExplorerService");
const fizzBuzzService = require("./../services/FizzBuzzService");

class explorerController {
    static getExplorersByMission (mission){
        const explorers = reader.readJsonFile("./data/explorers.json");
        const explorersByMission = explorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }

    static getExplorersByMissionStr (mission){
        const explorers = reader.readJsonFile("./data/explorers.json");
        const explorersByMission = explorerService.filterByMission(explorers, mission);
        const explorerNames = explorersByMission.map(explorer => " " + explorer.name)
        return explorerNames.toString();
    }

    static getExplorersUsernamesByMission (mission){
        const explorers = reader.readJsonFile("./data/explorers.json");
        const explorersUsernamesByMission = explorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersUsernamesByMission;
    }

    static getExplorersAmountByMission (mission){
        const explorers = reader.readJsonFile("./data/explorers.json");
        const explorersAmountByMission = explorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmountByMission;
    }

    static getValidationInNumber (number){
        const validationInNumber = fizzBuzzService.applyValidationInNumber(number);
        return validationInNumber;
    }
}

module.exports = explorerController;
