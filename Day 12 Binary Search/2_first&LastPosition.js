// Problem:
//     Given a sorted array, return the first and last index of a target.
//     If not found → return [-1,-1].

function searchRange(nums, target) {
  function findFirst() {
    let left = 0, right = nums.length - 1, ans = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) right = mid - 1;
      else left = mid + 1;
      if (nums[mid] === target) ans = mid;
    }
    return ans;
  }

  function findLast() {
    let left = 0, right = nums.length - 1, ans = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) left = mid + 1;
      else right = mid - 1;
      if (nums[mid] === target) ans = mid;
    }
    return ans;
  }

  return [findFirst(), findLast()];
}

console.log(searchRange([2,4,4,4,6,8], 4)); // [1, 3]

// Execution Table — findFirst()
// | Step | left | right | mid | nums[mid] | Action     |   ans |
// | ---: | ---: | ----: | --: | --------: | ---------- | ----: |
// |    1 |    0 |     5 |   2 |         4 | move left  |     2 |
// |    2 |    0 |     1 |   0 |         2 | move right |     2 |
// |    3 |    1 |     1 |   1 |         4 | move left  | **1** |

// Execution Table — findLast()
// | Step | left | right | mid | nums[mid] | Action     |   ans |
// | ---: | ---: | ----: | --: | --------: | ---------- | ----: |
// |    1 |    0 |     5 |   2 |         4 | move right |     2 |
// |    2 |    3 |     5 |   4 |         6 | move left  |     2 |
// |    3 |    3 |     3 |   3 |         4 | move right | **3** |
