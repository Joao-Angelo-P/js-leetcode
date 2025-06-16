/**
 * @param {number[]} nums
 * @return {number}
 * 2016. Maximum Difference Between Increasing Elements
 */

// Solution -> Time Complexity: O(n) Space Complexity: O(1)
var maximumDifference = function(nums) {
    const l = nums.length;
    let r = -1;
    let number = nums[0];
    for (let i = 1; i < l; i++){
        let tmp = nums[i] - number; 
        if (tmp > 0){
            r = Math.max(r, tmp);
        }else{
            number = nums[i];
        }
    }
    return r;
};


// Brute Force Solution: Time Complexity: O(n**2) Space Complexity: O(1)
var maximumDifference2 = function(nums) {
    const l = nums.length;
    let r = 0;
    for (let i = 0; i < l; i++){
        for (let j = i + 1; j < l; j++){
            let tmp = nums[j] - nums[i]
            if (tmp > r){
                r = tmp;
            }
        }
    }
    return r ? r : -1;
};
