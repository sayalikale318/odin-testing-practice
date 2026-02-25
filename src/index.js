export function capitalize(str) {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  }
};

export function caesarCipher(str, shift) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
    }

    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
    }

    return char;
  }).join('');
}

export function analyzeArray(arr) {
  const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
}