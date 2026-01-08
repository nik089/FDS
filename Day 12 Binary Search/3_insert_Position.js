function searchInsert(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return left; // insertion position
}

// nums = [1, 3, 5, 6]
// target = 5
// | Step | left | right | mid | nums[mid] | Comparison | Action       |
// | ---: | ---: | ----: | --: | --------: | ---------- | ------------ |
// |    1 |    0 |     3 |   1 |         3 | 3 < 5      | left = 2     |
// |    2 |    2 |     3 |   2 |         5 | 5 == 5     | **return 2** |
