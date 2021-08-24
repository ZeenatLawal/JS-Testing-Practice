const stringLength = require('./stringLength.js');

test('returns length of string', () => {
  expect(stringLength('okay')).toBe(4);
});

test('checks length of string', () => {
  expect(stringLength('testing okay')).toBeFalsy();
});