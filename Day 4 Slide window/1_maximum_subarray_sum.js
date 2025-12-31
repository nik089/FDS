// Array = [2, 1, 5, 1, 3, 2]
// K = 3
// output = 9

// Why Sliding Window?
//   All subarrays must be continuous and size is fixed.

//   How it works (concept)
//     First window: [2,1,5] → sum = 8
//     Slide window one step right:

//       Remove 2, add 1 → [1,5,1] → sum = 7

//     Slide again:
//       Remove 1, add 3 → [5,1,3] → sum = 9 (max);

//  Instead of recalculating sums, we reuse previous sum.
function maxSum(arr, k) {
  let sum = 0;
  let max = 0;

  // first window
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = sum;

  // slide window
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    max = Math.max(max, sum);
  }
  return max;
}
