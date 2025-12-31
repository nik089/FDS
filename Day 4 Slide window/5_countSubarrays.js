// Array = [1,1,1]
// K = 2
// 2 → [1,1]


function countSubarrays(arr, k) {
  let left = 0;
  let sum = 0;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];           // expand window

    while (sum > k) {            // shrink if sum exceeds k
      sum -= arr[left];
      left++;
    }

    if (sum === k) {             // valid subarray found
      count++;
    }
  }

  return count;
}
