const reader = require("./../../lib/utils/Reader");
const fizzBuzzService = require("./../../lib/services/FizzBuzzService");

describe("FizzBuzz modifier testing", () => {
    test("Validating Fizz Buzz Functionality ", () => {
        const explorers = reader.readJsonFile("./data/test.json");
        const test = fizzBuzzService.applyValidationInExplorer(explorers, "node");
        expect(test[0].trick).toBe("FIZZ");
        expect(test[1].trick).toBe("BUZZ");
        expect(test[2].trick).toBe("FIZZBUZZ");
        expect(test[3].trick).toBe(4);
    });

    test("Fizz Buzz Number Functionality", () => {
        const number = 15;
        const test = fizzBuzzService.applyValidationInNumber(number);
        expect(test).toBe("FIZZBUZZ");
    });
});
