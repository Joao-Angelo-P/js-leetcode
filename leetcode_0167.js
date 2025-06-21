/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 167. Two Sum II - Input Array Is Sorted
var twoSum = function(numbers, target) {
    let c = 0;
    let f = numbers.length - 1;
    while (1) {
        if (numbers[c] + numbers[f] < target) c++;
        else if (numbers[c] + numbers[f] > target) f--;
        else{
                return [c+1, f+1];
            }
    }
    
};
