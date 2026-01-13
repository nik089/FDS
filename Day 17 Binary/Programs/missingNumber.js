// What is the problem?
//     An array contains numbers from 0 to n, but one number is missing.

// XOR Property:
// a ^ a = 0
// a ^ 0 = a
// XOR cancels duplicates.

// nums = [3,0,1]

// Expected XOR = 0^1^2^3 = 0
// Actual XOR   = 3^0^1 = 2

// Missing = 0 ^ 2 = 2


var missingNumber = function(nums) {
  let xor = nums.length;

  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }

  return xor;
};


// | Iteration (i) | i | nums[i] | i ^ nums[i] | xor before | xor after |
// | ------------- | - | ------- | ----------- | ---------- | --------- |
// | Start         | — | —       | —           | 3          | 3         |
// | 0             | 0 | 3       | 0 ^ 3 = 3   | 3          | 3 ^ 3 = 0 |
// | 1             | 1 | 0       | 1 ^ 0 = 1   | 0          | 0 ^ 1 = 1 |
// | 2             | 2 | 1       | 2 ^ 1 = 3   | 1          | 1 ^ 3 = 2 |
// return xor = 2
