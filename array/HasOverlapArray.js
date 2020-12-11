//no overlap
//252. Meeting Rooms
const input = [[0, 30],  [15, 20], [5, 10],]
function hasOverLap(input) {
  const sortedStartTimeArray = input.sort((a, b) => {
    a[0] < b[0]
  })
  for (let i = 0; i < sortedStartTimeArray.length -1; i++) {
    const early = sortedStartTimeArray[i]
    const later = sortedStartTimeArray[i+1]
    if (early[1] > later[0]) {
      return true
    }
  }

  return false
}

console.log(hasOverLap(input))
console.log(hasOverLap([[0, 30],  [31, 32]]))
