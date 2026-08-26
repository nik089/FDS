// Array = [1,3,-1,-3,5,3,6,7]
// K = 3
// // Output: [3,3,5,5,6,7]


// FIXED WINDOW — MAXIMUM

// K = fixed
// ↓
// Window size same

// RIGHT → new element ➡️
// LEFT  → old element remove ➡️

// Goal:
// Har window ka MAXIMUM

// [1, 3, -1] → 3
// [3, -1, -3] → 3
// [-1, -3, 5] → 5
// [-3, 5, 3] → 5
// [5, 3, 6] → 6
// [3, 6, 7] → 7

// Answer:
// [3, 3, 5, 5, 6, 7]


function maxSlidingWindow(nums, k) {
  let result = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let max = nums[i];

    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }

    result.push(max);
  }

  return result;
}

console.log(
  maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
);



//optimzed way
var maxSlidingWindow = function (nums, k) {
  let deque = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {

    // Window ke bahar wala index remove
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Chhote elements remove
    while (
      deque.length &&
      nums[deque[deque.length - 1]] <= nums[i]
    ) {
      deque.pop();
    }

    deque.push(i);

    // Window complete hone ke baad max add
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};
