// this is type first
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

  // for (let right = k; right < arr.length; right++) {
  //   windowSum += arr[right];          // add
  //   windowSum -= arr[right - k];      // remove
  //   maxSum = Math.max(maxSum, windowSum);
  // }

  // or
  for (let right = k; right < arr.length; right++) {
    // sum = sum - element_leaving + element_entering
    sum = sum - arr[right - k] + arr[right];
    max = Math.max(max, sum);
  }
  return max;
}

let arr = [2, 1, 5, 1, 3, 2];
let target = 3;
console.log(maxSum(arr, target)); //

//   (2) Step 1 — Build the first window
// | i | arr[i] | sum (running) |
// | - | ------ | ------------- |
// | 0 | 2      | 2             |
// | 1 | 1      | 3             |
// | 2 | 5      | 8             |

// sum = 8
// max = 8

// sum = sum - element_leaving + element_entering
// sum = sum - element_leaving + element_entering
//      => sum - arr[right - k] + arr[right]

//  sum = 8
// max = 8
// right starts at = k (3)

// | Iteration | right | Window (visual) | Calculation                     | sum (after) | max = Math.max(max, sum) |
// | --------- | ----- | --------------- | ------------------------------- | ----------- | ------------------------ |
// | 1         | 3     | `[1, 5, 1]`     | 8 − arr[0] + arr[3] = 8 − 2 + 1 | **7**       | max(8, 7) = **8**        |
// | 2         | 4     | `[5, 1, 3]`     | 7 − arr[1] + arr[4] = 7 − 1 + 3 | **9**       | max(8, 9) = **9**        |
// | 3         | 5     | `[1, 3, 2]`     | 9 − arr[2] + arr[5] = 9 − 5 + 2 | **6**       | max(9, 6) = **9**        |

// =================================================================
// 2.Find the maximum average of any subarray of size k.
arr1 = [1, 12, -5, -6, 50, 3];
k1 = 4;
// Step 1: First Window
// [1, 12, -5, -6]
// sum = 2

// Step 2: Slide Window
// Remove 1, add 50
// [12, -5, -6, 50]
// sum = 51 ✅
// Remove 12, add 3
// [-5, -6, 50, 3]
// sum = 42
// Answer=>Max average = 51 / 4 = 12.75

function maxAverage(arr, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let maxSum = sum;

  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}
// ======================================================
// Example 2: Count Subarrays of Size K with Sum ≥ X
// ❓ Problem
// Count how many subarrays of size k have sum ≥ x.

arr = [2, 1, 3, 4, 1];
k = 2;
x = 5;

// Windows
//       [2,1] → sum = 3 (X)
//       [1,3] → sum = 4 (X)
//       [3,4] → sum = 7 ✅
//       [4,1] → sum = 5 ✅

// Answer=>Count = 2

function countSubarrays(arr, k, x) {
  let sum = 0,
    count = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  if (sum >= x) count++;

  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    if (sum >= x) count++;
  }
  return count;
}
