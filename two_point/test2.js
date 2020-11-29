//Two Pointer 的第二個範例 - Leetcode #977 Squares of a Sorted Array
//input sorted array
//output sorted sqr array


function sol(array){
  //return array.map(ele => ele * ele).sort((a, b) => a>b)
  const result = []
  for (let i =0,  j=array.length -1; i<=j;) {
    const l = array[i] * array[i]
    const r = array[j] * array[j]
    if (r > l) {
      result.splice(0, 0, r)
      j--
    }  else if (l >= r) {
      result.splice(0, 0, l)
      i++
    }
  }
  return result
}


const input = [-4, -1, 0, 3, 10]
const output = sol(input)
console.log(output)

