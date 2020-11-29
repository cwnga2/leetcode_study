//Two Pointer 的第四個範例 - Leetcode #713 Subarray Product Less Than K
const input = [10, 5, 2, 6]
const k = 100
function sol(input,k) {
  let count = 0
  let l = 0
  let r = 0
  let n = input.length
  let product = 1
  while (r<n) {
    product = product * input[r]
    while (product >= k) {
      product = product / input[l]
      l++
    }
    let length = r - l +1
    count = count + length
    r++
  }
  return count
}
console.log(sol(input, k))

