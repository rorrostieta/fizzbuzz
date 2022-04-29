class explorerService {
    static filterByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = explorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMissionToGetUsernames = explorerService.filterByMission(explorers, mission);
        const usernamesInMission = explorersInMissionToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInMission;
    }
}
module.exports = explorerService;
