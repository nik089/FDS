function maxSubArray(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// ============================================
// Index:  0   1   2   3   4   5   6   7   8
// Value: -2   1  -3   4  -1   2   1  -5   4

// Valid Continuous Subarrays
// (single element):
                 [-2], [1], [-3], [4], [-1], [2], [1], [-5], [4]
                
// (two elements):
[-2, 1]
[1, -3]
[-3, 4]
[4, -1]
[-1, 2]
[2, 1]
[1, -5]
[-5, 4]

//longer
[4, -1, 2, 1]        // index 3 → 6
[-3, 4, -1, 2]
[1, -3, 4, -1, 2, 1]

// NOT Continuous Subarrays
// [4, 2, 1]      (X) skipped -1
// [-2, -3, 4]    (X) skipped 1
// [1, 4]         (X) not adjacent

// Best Continuous Subarray (Maximum Sum):
// [4, -1, 2, 1]  sum ===> 6



// | Index | Value | currentSum       | maxSum |
// | ----- | ----- | ---------------- | ------ |
// | 0     | -2    | -2               | -2     |
// | 1     | 1     | max(1, -2+1)=1   | 1      |
// | 2     | -3    | max(-3, 1-3)= -2 | 1      |
// | 3     | 4     | max(4, -2+4)=4   | 4      |
// | 4     | -1    | max(-1, 4-1)=3   | 4      |
// | 5     | 2     | max(2, 3+2)=5    | 5      |
// | 6     | 1     | max(1, 5+1)=6    | 6      |
// | 7     | -5    | max(-5, 6-5)=1   | 6      |
// | 8     | 4     | max(4, 1+4)=5    | 6      |
