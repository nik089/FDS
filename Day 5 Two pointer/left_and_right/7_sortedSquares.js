//

function sortedSquares(arr) {
  let left = 0,
    right = arr.length - 1;
  let result = [];

  while (left <= right) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      result.unshift(arr[left] ** 2);
      left++;
    } else {
      result.unshift(arr[right] ** 2);
      right--;
    }
  }
  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]