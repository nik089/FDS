function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

// | Step  | left | str[left] | right | str[right] | Comparison                             | Action          |
// | ----- | ---- | --------- | ----- | ---------- | -------------------------------------- | --------------- |
// | Start | 0    | `m`       | 4     | `m`        | equal                                  | move pointers   |
// | 1     | 1    | `a`       | 3     | `a`        | equal                                  | move pointers   |
// | 2     | 2    | `d`       | 2     | `d`        | loop stops (left < right is **false**) | exit loop       |
// | End   | —    | —         | —     | —          | —                                      | return **true** |
