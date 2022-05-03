const explorerController = require("./../../lib/controllers/ExplorerController");

describe("Test for the ExplorerController module", () => {
    test("1. Get Explorers By Mission", () => {
        const test = explorerController.getExplorersByMission("node");
        expect(test[0].name).toBe("Woopa1");
    });

    test("1.1 Get Explorers By Mission (name string)", () => {
        const test = explorerController.getExplorersByMissionStr("node");
        console.log(test)
        expect(test).toMatch(/ Woopa1, Woopa2, Woopa3/);
    });

    test("2. Get Explorers Usrname By Mission", () => {
        const test = explorerController.getExplorersUsernamesByMission("node");
        expect(test).toContain("ajolonauta1");
        expect(test).not.toContain("ajolonauta9");
    });

    test("3. Get Explorers Amount By Mission", () => {
        const test = explorerController.getExplorersAmountByMission("node");
        expect(test).toBe(10);
    });

    test("4. Get Number Validation of FizzBuzzService", () => {
        const test = explorerController.getValidationInNumber(30);
        expect(test).toBe("FIZZBUZZ");
    });
});
