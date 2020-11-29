//Two Pointer 的第三個範例 - Leetcode #15 3Sum

const input = [-1, 0, 1, 2, -1, -4]
//const expect = [
//[-1, 0, 1]
//[-1, -1, 2]
//]
console.log(sol(input))
function sol(arr) {
  const sortedArr = arr.sort((a, b) => a>b)
  const result = []
  const n = sortedArr.length
  for (let i = 0; i < n-2; i++) {
    if (i > 0 && sortedArr[i] == sortedArr[i -1]) {
      continue;
    }
    twoElementEqualTarget(sortedArr, -sortedArr[i], i+1, result)
  }
  return result
}

function twoElementEqualTarget(arr, target, start, result) {
  let l = start
  let r = arr.length -1
  while (l < r) {
    let lvalue = arr[l]
    let rvalue = arr[r]
    if (lvalue + rvalue > target) {
      r--
    }else if (lvalue + rvalue < target) {
      l++
    } else {
      result.push([lvalue, rvalue, -target]);
      r--
      l++
      while(l < r && arr[l] == arr[l-1]) {
        l++
      }
      while(l < r && arr[r] == arr[r+1]) {
        r--
      }
    }
  }
}

