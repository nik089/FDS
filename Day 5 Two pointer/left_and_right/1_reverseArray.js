function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
let arr = [1, 4, 5, 6, 7, 2];
console.log(reverseArr(arr)); // [2, 7, 6, 5, 4, 1]

// | Step  | left index | right index | Values swapped            | Array after swap                |
// | ----- | ---------- | ----------- | ------------------------- | ------------------------------- |
// | Start | 0          | 5           | —                         | `[1, 4, 5, 6, 7, 2]`            |
// | 1     | 0          | 5           | swap **1 ↔ 2**            | `[2, 4, 5, 6, 7, 1]`            |
// | 2     | 1          | 4           | swap **4 ↔ 7**            | `[2, 7, 5, 6, 4, 1]`            |
// | 3     | 2          | 3           | swap **5 ↔ 6**            | `[2, 7, 6, 5, 4, 1]`            |
// | Stop  | 3          | 2           | loop stops (left ≥ right) | Final: **`[2, 7, 6, 5, 4, 1]`** |
