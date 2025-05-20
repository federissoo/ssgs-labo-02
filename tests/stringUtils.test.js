const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
  test('inverte una stringa normale', () => {
    expect(reverseString('ciao')).toBe('oaic');
  });
  test('gestisce stringa vuota', () => {
    expect(reverseString('')).toBe('');
  });
  test('gestisce caratteri speciali', () => {
    expect(reverseString('a!b@c')).toBe('c@b!a');
  });
});

describe('isPalindrome', () => {
  test('riconosce un palindromo semplice', () => {
    expect(isPalindrome('anna')).toBe(true);
  });
  test('ignora maiuscole e spazi', () => {
    expect(isPalindrome('I topi non avevano nipoti')).toBe(true);
  });
  test('riconosce una stringa non palindroma', () => {
    expect(isPalindrome('ciao')).toBe(false);
  });
  test('gestisce stringa vuota', () => {
    expect(isPalindrome('')).toBe(true);
  });
  test('gestisce stringa di un solo carattere', () => {
    expect(isPalindrome('a')).toBe(true);
  });
});

describe('truncateString', () => {
  test('tronca una stringa più lunga del massimo', () => {
    expect(truncateString('abcdef', 4)).toBe('abcd...');
  });
  test('non tronca se la stringa è corta', () => {
    expect(truncateString('abc', 5)).toBe('abc');
  });
  test('gestisce maxLength uguale alla lunghezza', () => {
    expect(truncateString('abc', 3)).toBe('abc');
  });
  test('gestisce stringa vuota', () => {
    expect(truncateString('', 2)).toBe('');
  });
});

describe('countCharacters', () => {
  test('conta i caratteri correttamente', () => {
    expect(countCharacters('aabbc')).toEqual({ a: 2, b: 2, c: 1 });
  });
  test('gestisce stringa vuota', () => {
    expect(countCharacters('')).toEqual({});
  });
  test('gestisce caratteri speciali e spazi', () => {
    expect(countCharacters('a a!')).toEqual({ a: 2, ' ': 1, '!': 1 });
  });
});