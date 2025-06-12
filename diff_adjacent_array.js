/**
 * @param {number[]} nums
 * @return {number}
 */
// 3423. Maximum Difference Between Adjacent Elements in a Circular Array
var maxAdjacentDistance = function(nums) {
    let r = Math.abs(nums[0] - nums[nums.length - 1]);
    for (let i = 0; i < nums.length - 1; i++){
        const d = Math.abs(nums[i] - nums[i+1]);
        if (d > r){
            r = d;
        }
    }
    return r;
};
