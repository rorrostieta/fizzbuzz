const explorerService = require("./ExplorerService");

class fizzBuzzService {
    static applyValidationInExplorer(explorers, mission){
        const explorersInMission = explorerService.filterByMission(explorers, mission);
        const explorersInMissionAndFizzBuzzTrick = explorersInMission.map(function(element) {
            if (element.score%3 === 0 && element.score%5 === 0) {
                element.trick = "FIZZBUZZ";
                return element;
            }
            else if (element.score%3 === 0) {
                element.trick = "FIZZ";
                return element;
            }
            else if (element.score%5 === 0) {
                element.trick = "BUZZ";
                return element;
            }
            else {
                element.trick = element.score;
                return element;
            }
        });
        return explorersInMissionAndFizzBuzzTrick;
    }

    static applyValidationInNumber(number) {
        if (number%3 === 0 && number%5 === 0) {
            return "FIZZBUZZ";
        }
        else if (number%3 === 0) {
            return "FIZZ";
        }
        else if (number%5 === 0) {
            return "BUZZ";
        }
        else {
            return number;
        }
    }
}
module.exports = fizzBuzzService;
