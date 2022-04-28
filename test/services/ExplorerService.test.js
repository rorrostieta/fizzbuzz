const reader = require("./../../app/module/Reader");
const explorerService = require("./../../app/services/ExplorerService");

describe("Filter and mapping operations", () => {
    test("1. Filter by Mission", () => {
        const explorers = reader.readJsonFile("./data/explorers.json");
        const test = explorerService.filterByMission(explorers, "node");
        expect(test[0].name).toBe("Woopa1");
    });

    test("2. Get amount by Mission", () => {
        const explorers = reader.readJsonFile("./data/explorers.json");
        const test = explorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(test).toBe(10);
    });

    test("3. Get usernames by Mission", () => {
        const explorers = reader.readJsonFile("./data/explorers.json");
        const test = explorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(test).toContain("ajolonauta4");
        expect(test).toContain("ajolonauta15");
        expect(test).not.toContain("ajolonauta10");
    });
});
