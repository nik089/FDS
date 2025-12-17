function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

let arr = [1,2,5,3,4] //false
// let arr = [1,2,5,3,4] // true
console.log(isSorted(arr)); 
