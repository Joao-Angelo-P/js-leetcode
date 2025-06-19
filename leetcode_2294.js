/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 2294. Partition Array Such That Maximum Difference Is K
var partitionArray = function (nums, k) {
  nums.sort((a, b) => a - b);

  const l = nums.length;
  let min = nums[0];
  let subarrs = 1;

  for (let i = 1; i < l; i++) {
    if (nums[i] - min > k) {
      subarrs++;
      min = nums[i];
    }
  }

  return subarrs;
};
