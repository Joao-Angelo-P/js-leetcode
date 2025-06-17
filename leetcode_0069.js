/**
 * @param {number} x
 * @return {number}
 */
// 69. Sqrt(x)
var mySqrt = function(x) {
    if (x < 2){
        return x;
    }
    let sqrt = x;
    while (Math.abs(sqrt * sqrt - x) > 0.5){
        sqrt = (sqrt + x / sqrt) / 2;
    }
    return Math.floor(sqrt);
};
