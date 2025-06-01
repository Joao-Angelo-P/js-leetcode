/**
 * @param {number} n
 * @return {number}
 */
/*
172. Factorial Trailing Zeroes
*/
var trailingZeroes = function(n) {
    let zeros = 0;
    let mul_cinco = 5;
    while (n >= mul_cinco){
        zeros += Math.floor(n/mul_cinco)
        mul_cinco *= 5
    }
    return zeros
};
