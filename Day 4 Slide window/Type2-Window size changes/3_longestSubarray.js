// ✅ “Longest Subarray With Sum ≤ K”
//         Other common names you may see in interviews:
//                 Maximum Length Subarray With Sum ≤ K
//                 Longest Subarray Bounded by Sum K
//                 Longest Subarray With Sum at Most K

arr = [1, 2, 1, 0, 1, 1, 0];
K = 4;
output=> 5
// Because the longest valid subarray is:[1, 0, 1, 1, 0]

function longestSubarray(arr, k) {
  let left = 0,
    sum = 0,
    maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > k) {
      sum -= arr[left];
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}


// if you want print sub Array
// left  → start of window
// right → end of window
// sum   → total in window
// maxLen → longest valid window so far
// bestStart → where that window starts (index of subarray start in main array)

function longestSubarray(arr, k) {
  let left = 0,
      sum = 0,
      maxLen = 0,
      bestStart = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > k) {
      sum -= arr[left];
      left++;
    }

    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      bestStart = left;
    }
  }

  const subarray = arr.slice(bestStart, bestStart + maxLen);
  console.log("Longest subarray:", subarray);
  return maxLen;
}

let arr = [1, 2, 1, 0, 1, 1, 0];
let K = 4;

console.log("Length:", longestSubarray(arr, K)); 
// Longest subarray: [ 1, 0, 1, 1, 0 ]
// Length: 5





// | step | right | left | arr[right] | sum after add | while (sum>4) actions             | window after while | window len | maxLen |
// | ---: | ----: | ---: | ---------: | ------------: | --------------------------------- | ------------------ | ---------: | -----: |
// |    1 |     0 |    0 |          1 |             1 | no shrink                         | [1]                |          1 |      1 |
// |    2 |     1 |    0 |          2 |             3 | no shrink                         | [1,2]              |          2 |      2 |
// |    3 |     2 |    0 |          1 |             4 | no shrink                         | [1,2,1]            |          3 |      3 |
// |    4 |     3 |    0 |          0 |             4 | no shrink                         | [1,2,1,0]          |          4 |      4 |
// |    5 |     4 |    0 |          1 |             5 | shrink → remove 1 → sum=4, left=1 | [2,1,0,1]          |          4 |      4 |
// |    6 |     5 |    1 |          1 |             5 | shrink → remove 2 → sum=3, left=2 | [1,0,1,1]          |          4 |      4 |
// |    7 |     6 |    2 |          0 |             3 | no shrink                         | **[1,0,1,1,0]**    |      **5** |  **5** |
