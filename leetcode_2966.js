/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
// 2966. Divide Array Into Arrays With Max Difference
var divideArray = function(nums, k) {
    //nums.sort(function (a,b) {return a - b;});
    nums.sort((a, b) => {
        return a - b;
    });
    let arr = [];
    let l = nums.length;
    // console.log(nums);
    for (let i = 0; i < l; i+=3){
        if(nums[i+2]-nums[i] > k) return [];
        // arr.push([nums[i], nums[i+1], nums[i+2]]);
        arr.push(nums.slice(i, i+3));
    }
    return arr;
};
