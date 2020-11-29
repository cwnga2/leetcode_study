const number = [2,7, 11, 15]
const target = 100
let l = 0
let r = number.length - 1
while(l <= r) {
  let tmpSum = number[l] + number[r]
  console.log("tmpSum", tmpSum, "target", target, 'l', l , 'r' ,r)
  if (tmpSum > target) {
    r--;
  } else if (tmpSum < target) {
    l++;
  } else {
    console.log( [l, r])
    return [l,r]
  }
}

