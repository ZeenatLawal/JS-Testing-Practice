const reverseString = require('./reverseString.js');

test('returns the reverse of string', () => {
  expect(reverseString('okay')).toMatch('yako');
});

test('returns the reverse of string', () => {
  expect(reverseString('')).toMatch("There's nothing to reverse");
});