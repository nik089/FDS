//Problem1 ==>  “Smallest Subarray With Sum ≥ K”
// (also called Minimum Size Subarray Sum)

// arr = [2, 1, 5, 2, 3]
// k = 7
// Smallest subarrays whose sum ≥ 7:

//   [2,1,5] → 8 (length 3)
//   [1,5,2] → 8 (length 3)
//   [5,2] → 7 (length 2) ← smallest
//   So result = 2
// Your code correctly finds that.

function minSubArrayLen(arr, target) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right]; // expand

    while (sum >= target) {// valid window
      minLen = Math.min(minLen, right - left + 1);
      sum -= arr[left]; // shrink
      left++;
    }
  }
  return minLen;
}


// or id want print sub array
function Test(arr, k){
  let left = 0;
  let windowSum = 0;
  let minLength = Infinity;
  let result = [];   // store best subarray

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    while (windowSum >= k) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        result = arr.slice(left, right + 1);   // save best window
      }
      windowSum -= arr[left];
      left++;
    }
  }

  console.log("Smallest valid subarray:", result);
  return minLength;
}

let arr = [2, 1, 5, 2, 3];
let K = 7;

console.log("Min length =", Test(arr, K));

                                              // Current window: [ 2, 1, 5 ]
                                              // Current window: [ 1, 5, 2 ]
                                              // Current window: [ 5, 2 ]
                                              // Smallest valid subarray: [ 5, 2 ]
                                              // Min length = 2






// | Step | right | left | arr[right] | sum (after add) | while? (sum ≥ 7) | action                 | window  | minLen |
// | ---- | ----: | ---: | ---------: | --------------: | ---------------- | ---------------------- | ------- | -----: |
// | 1    |     0 |    0 |          2 |               2 | no               | —                      | [2]     |      ∞ |
// | 2    |     1 |    0 |          1 |               3 | no               | —                      | [2,1]   |      ∞ |
// | 3    |     2 |    0 |          5 |               8 | yes              | compute len=3 → shrink | [2,1,5] |      3 |
// | 3a   |     2 |  0→1 |          — |               6 | stop (6<7)       | removed 2              | [1,5]   |      3 |
// | 4    |     3 |    1 |          2 |               8 | yes              | len=3 → shrink         | [1,5,2] |      3 |
// | 4a   |     3 |  1→2 |          — |               7 | yes              | remove 1               | [5,2]   |      3 |
// | 4b   |     3 |  2→3 |          — |               2 | stop             | removed 5              | **2**   |        |
// | 5    |     4 |    3 |          3 |               5 | no               | —                      | [2,3]   |      2 |
