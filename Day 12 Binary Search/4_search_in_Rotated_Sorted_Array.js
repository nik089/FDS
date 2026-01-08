// Problem:
    // Array was sorted and rotated:

//     In a rotated sorted array:
//          At least one half is always sorted

// So at every step:
//         Find mid
//         Check which side is sorted
//         Decide where the target can exist
//         Throw away the other half

function searchRotated(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // left side sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    }
    // right side sorted
    else {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}

console.log(searchRotated([4,5,6,7,0,1,2], 0)); // 4

// | Step | left | right | mid | nums[left] | nums[mid] | nums[right] | Sorted Side | Condition Check | Action       |
// | ---: | ---: | ----: | --: | ---------: | --------: | ----------: | ----------- | --------------- | ------------ |
// |    1 |    0 |     6 |   3 |          4 |         7 |           2 | Left sorted | 0 not in [4,7)  | left = 4     |
// |    2 |    4 |     6 |   5 |          0 |         1 |           2 | Left sorted | 0 in [0,1)      | right = 4    |
// |    3 |    4 |     4 |   4 |          0 |         0 |           0 | —           | mid == target   | **return 4** |



 
