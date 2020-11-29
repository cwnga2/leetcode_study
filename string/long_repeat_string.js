const str = 'aaabbbbccccccccccc'
function sol(str) {
  let start = 0
  let end = 1
  let maxLenStart = 0
  let maxLenEnd = 1
  for (let i = 1; i <= str.length; i++) {
		if (str[i-1] != str[i]) {
			end = i
      let len = end - start
      if (len > (maxLenEnd - maxLenStart)) {
        maxLenStart = start
        maxLenEnd = end
      }
      start = end;
    }

  }
  return str.substring(maxLenStart, maxLenEnd) //result start index, end -1
}
console.log(sol(str))
