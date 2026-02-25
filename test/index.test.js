import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} from '../src/index.js';

describe('capitalize', () => {
  test('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});

describe('reverseString', () => {
  test('reverses string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});

describe('calculator', () => {
  test('add', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtract', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('divide', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('multiply', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });
});

describe('caesarCipher', () => {
  test('shifts letters', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
  });

  test('wraps correctly', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('keeps punctuation', () => {
    expect(caesarCipher('Hello, World!', 3))
      .toBe('Khoor, Zruog!');
  });
});

describe('analyzeArray', () => {
  test('returns correct analysis', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
});