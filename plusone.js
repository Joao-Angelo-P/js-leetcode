/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*
 * 66. Plus One
 */
var plusOne = function (digits) {
  let i = digits.length - 1;

  while (i > -1) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
    i -= 1;
  }

  digits.unshift(1);
  return digits;
};
