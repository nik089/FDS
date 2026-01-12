// [1,3,-1,-3,5,3,6,7], k=3 → [3,3,5,5,6,7]


function maxSlidingWindow(nums, k) {
  let deque = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length && deque[0] <= i - k) deque.shift();

    while (deque.length && nums[deque.at(-1)] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  return result;
}
