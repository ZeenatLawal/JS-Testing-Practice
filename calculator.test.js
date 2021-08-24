const Calculator = require('./calculator.js');

const calculator = new Calculator();

describe('calculator add method', () => {
  test('add', () => {
    expect(calculator.add(8, 2)).toBe(10);
  });

  test('add', () => {
    expect(calculator.add(0, 2)).toBe(2);
  });

  test('add', () => {
    expect(calculator.add(50, 75)).toBe(125);
  });
});

describe('calculator subtract method', () => {
  test('subtract', () => {
    expect(calculator.subtract(120, 98)).toBe(22);
  });

  test('subtract', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('subtract', () => {
    expect(calculator.subtract(25, 8)).toBe(17);
  });
});

describe('calculator divide method', () => {
  test('divide', () => {
    expect(calculator.divide(50, 5)).toBe(10);
  });

  test('divide', () => {
    expect(calculator.divide(20, 4)).toBe(5);
  });

  test('divide', () => {
    expect(calculator.divide(64, 2)).toBe(32);
  });
});

describe('calculator multiply method', () => {
  test('multiply', () => {
    expect(calculator.multiply(30, 3)).toBe(90);
  });

  test('multiply', () => {
    expect(calculator.multiply(8, 5)).toBe(40);
  });

  test('multiply', () => {
    expect(calculator.multiply(7, 2)).toBe(14);
  });
});