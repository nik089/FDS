// Target = 7
// Array = [2,3,1,2,4,3]
// // output = 2  →  [4,3]


function minSubArrayLen(target, arr) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];        // expand window

    while (sum >= target) {   // valid window
      minLen = Math.min(minLen, right - left + 1);
      sum -= arr[left];       // shrink window
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
