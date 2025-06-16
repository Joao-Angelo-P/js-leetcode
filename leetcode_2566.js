/**
 * @param {number} num
 * @return {number}
 */
// 2566. Maximum Difference by Remapping a Digit
var minMaxDifference = function (num) {
    let digits = num.toString();
    let max_ = "";
    let min_ = "";
    let p = digits[0];
    let c = 1;
    let trocar = "";

    for (let char of digits) {
        if (char < 9) {
            if (c) {
                trocar = char;
                c = 0;
            }
        }

        if (char < 9 && trocar == char) {
            max_ += "9";
        } else {
            max_ += char;
        }

        if (char == p) {
            min_ += "0";
        } else {
            min_ += char;
        }
    }

    return max_ - min_;
};
