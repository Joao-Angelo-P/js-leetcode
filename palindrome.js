/**
 * @param {number} x
 * @return {boolean}
 */
/*
 * 9. Palindrome Number
 */
var isPalindrome = function (x) {
  let reverso = 0;
  let numero = x;

  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  while (x > 0) {
    reverso = reverso * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverso === numero;
};


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverso = 0;

  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  while (reverso < x) {
    reverso = reverso * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return [reverso, Math.floor(reverso / 10)].includes(x);
};
