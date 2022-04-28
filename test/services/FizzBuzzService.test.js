const reader = require('./../../app/module/Reader');
const fizzBuzzService = require('./../../app/services/fizzBuzzService');

describe('FizzBuzz modifier testing', () => {
  const explorers = reader.readJsonFile('./data/test.json')
  const test = fizzBuzzService.applyValidationInExplorer(explorers, 'node')
  expect(test[0].trick).toBe('FIZZ')
  expect(test[1].trick).toBe('BUZZ')
  expect(test[2].trick).toBe('FIZZBUZZ')
  expect(test[3].trick).toBe(4)
});
