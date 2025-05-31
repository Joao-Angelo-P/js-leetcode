/**
 * @param {string} s
 * @return {number}
 */
/*
13. Roman to Integer
*/
var romanToInt = function (s) {
  function reverseString(str) {
    return str.split("").reduce((reversed, char) => char + reversed, "");
  }

  const roman2int = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const s_ = reverseString(s);
  let r = 0;
  let antecessor = 0;

  for (const i of s_) {
    if (roman2int[i] < antecessor) {
      r -= roman2int[i];
    } else {
      r += roman2int[i];
    }
    antecessor = roman2int[i];
  }

  return r;
};
