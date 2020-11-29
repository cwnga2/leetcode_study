//Sliding Window 的第一個範例 - Leetcode #209 - Minimum Size Subarray Sum


const s = 7
const nums = [2, 3,1, 2, 4, 3]
function minSubArrayLen(s, nums) {
  let start = 0
  let tmpSum = 0
  let minSubArrayLen = nums.length
  for (let end = 0; end < nums.length; end++) {
    tmpSum = tmpSum + nums[end]
    while (tmpSum >= s) {
      minSubArrayLen = Math.min(minSubArrayLen, (end - start) +1)
      tmpSum = tmpSum - nums[start]
      start++

    }

  }
  return minSubArrayLen

}
console.log(minSubArrayLen(s, nums))
