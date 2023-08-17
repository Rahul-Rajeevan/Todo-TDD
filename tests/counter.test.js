const { increment, decrement } = require('../src/counter');

test('increments the counter value', () => {
  expect(increment(0)).toBe(1);
});

test('decrements the counter value', () => {
  expect(decrement(1)).toBe(0);
});
