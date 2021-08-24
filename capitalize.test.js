const capitalize = require('./capitalize.js');

test('capitalize the first character of the string', () => {
  expect(capitalize('okay')).toMatch('Okay');
});

test('capitalize the first character of the string', () => {
  expect(capitalize('testing')).toMatch('Testing');
});

test('No character to capitalize', () => {
  expect(() => capitalize('')).toThrow();
});