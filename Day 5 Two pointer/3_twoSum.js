(arr = [1, 2, 4, 6, 10]), (target = 8); // [2,6]

function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    if (sum < target) left++;
    else right--;
  }
}

// | Step | left | arr[left] | right | arr[right] | sum | Compare to target (8) | Action                          |
// | ---- | ---- | --------- | ----- | ---------- | --- | --------------------- | ------------------------------- |
// | 1    | 0    | 1         | 4     | 10         | 11  | 11 > 8                | `right--` (move right leftward) |
// | 2    | 0    | 1         | 3     | 6          | 7   | 7 < 8                 | `left++` (move left rightward)  |
// | 3    | 1    | 2         | 3     | 6          | 8   | 8 === 8               | return `[2, 6]`                 |
