// [1,2,3,1]  → peak = 3 (index 2)

function findPeak(nums) {
  let left = 0, right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) left = mid + 1;
    else right = mid;
  }

  return left; // or right
}

console.log(findPeak([1,2,3,1])); // 2
