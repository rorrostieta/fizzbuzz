const reader = require("./../../app/module/Reader");

describe("Need to read a JSON file", () => {
    test("1. Reader.js test with test data", () => {
        const test = reader.readJsonFile("./data/test.json");
        expect(test[0].name).toBe("TestName0");
    });

    test("2. Reader.js test with explorers data", () => {
        const test = reader.readJsonFile("./data/explorers.json");
        expect(test[0].mission).toBe("node");
    });
});
