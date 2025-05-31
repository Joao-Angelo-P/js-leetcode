/**
 * @param {number} x
 * @return {number}
 */
/*
7. Reverse Integer
*/
var reverse = function (x) {
  let r = 0;
  let n = 0;

  if (x < 0) {
    x = -1 * x;
    n = 1;
  }

  while (x) {
    r = r * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (n) {
    r = -1 * r;
  }

  if (r < -1 * 2 ** 31 || r > 2 ** 31 - 1) {
    return 0;
  } else {
    return r;
  }
};


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let n = false;

  if (x < 0) {
    n = true;
    x *= -1;
  }

  x = x.toString();
  let invertido = x.split("").reverse().join("");
  let result = n ? "-" + invertido : invertido;
  result = +result;

  if (result < -1 * 2 ** 31 || result > 2 ** 31 - 1) {
    return 0;
  } else {
    return result;
  }
};
