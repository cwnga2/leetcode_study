//no overlap
//252. Meeting Rooms
const input = [[1, 3], [2, 6, ], [7, 10], [15, 18]]
//expect [[1, 6],  [8, 10], [15, 18]]
function mergeOverLapArray(input) {
  const sortedStartTimeArray = input.sort((a, b) => {
    a[0] < b[0]
  })
  const mergedArray = [sortedStartTimeArray[0]]
  for (let i = 1; i < sortedStartTimeArray.length ; i++) {
    const now = sortedStartTimeArray[i]
    const mergedArrayLast = mergedArray[mergedArray.length - 1]
    if (mergedArrayLast[1] < now[0]) {
      mergedArray.push( now)
    } else {
      mergedArrayLast[1] = Math.max(   mergedArrayLast[1], now[1])
    }
  }
  return mergedArray
}

console.log(mergeOverLapArray(input))
console.log(mergeOverLapArray([[0, 30],  [31, 32]]))
