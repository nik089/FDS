// Target = 7
// Array = [2,3,1,2,4,3]
// // output = 2  →  [4,3]
// Subarray length is not fixed and this type two Type 2️⃣ Variable Size Sliding Window

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



// | Step | Line/Action                     | right | left  | sum   | minLen | Window (indexes) | Explanation               |
// | ---- | ------------------------------- | ----- | ----- | ----- | ------ | ---------------- | ------------------------- |
// | 1    | init                            | 0     | 0     | 0     | ∞      | []               | Variables created         |
// | 2    | add arr[0]=2                    | 0     | 0     | 2     | ∞      | [0…0] → [2]      | Enter loop, expand window |
// | 3    | check while (2 ≥ 7)?            | 0     | 0     | 2     | ∞      | [2]              | false → do nothing        |
// | 4    | add arr[1]=1                    | 1     | 0     | 3     | ∞      | [0…1] → [2,1]    | Expand                    |
// | 5    | check while (3 ≥ 7)?            | 1     | 0     | 3     | ∞      | [2,1]            | false                     |
// | 6    | add arr[2]=5                    | 2     | 0     | 8     | ∞      | [0…2] → [2,1,5]  | Expand                    |
// | 7    | while (8 ≥ 7) true              | 2     | 0     | 8     | ∞      | [2,1,5]          | Condition hit             |
// | 8    | update minLen = min(∞, 2-0+1=3) | 2     | 0     | 8     | **3**  | [2,1,5]          | First valid window        |
// | 9    | sum -= arr[left] → 8-2          | 2     | 0     | **6** | 3      | [2,1,5]          | Remove left element       |
// | 10   | left++                          | 2     | **1** | 6     | 3      | [1…2] → [1,5]    | Shrink                    |
// | 11   | while (6 ≥ 7)? false            | 2     | 1     | 6     | 3      | [1,5]            | Stop shrinking            |
// | 12   | add arr[3]=2                    | 3     | 1     | 8     | 3      | [1…3] → [1,5,2]  | Expand                    |
// | 13   | while (8 ≥ 7) true              | 3     | 1     | 8     | 3      | [1,5,2]          | Condition hit             |
// | 14   | minLen = min(3, 3)              | 3     | 1     | 8     | **3**  | [1,5,2]          | Still 3                   |
// | 15   | sum -= arr[left] → 8-1          | 3     | 1     | **7** | 3      | [1,5,2]          | Remove left               |
// | 16   | left++                          | 3     | **2** | 7     | 3      | [2…3] → [5,2]    | Shrink                    |
// | 17   | while (7 ≥ 7) true              | 3     | 2     | 7     | 3      | [5,2]            | Still valid               |
// | 18   | minLen = min(3, 2)              | 3     | 2     | 7     | **2**  | [5,2]            | Better answer             |
// | 19   | sum -= arr[left] → 7-5          | 3     | 2     | **2** | 2      | [5,2]()          |                           |

// ===========================================
// Example 3: Longest Subarray with Sum ≤ K
// ❓ Problem Find the longest subarray whose sum is ≤ K.

arr = [1, 2, 1, 0, 1, 1, 0]
K = 4
// How It Works
//     Expand right pointer
//     If sum > K → shrink from left

//Step Insight
//  [1,2,1] → sum = 4 ✅
// [1,2,1,0] → sum = 4 ✅ (length 4)

function longestSubarray(arr, k) {
  let left = 0, sum = 0, maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > k) {
      sum -= arr[left];
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// =======================================================
// Input = "abcabcbb";
// 3   → "abc"
// // Output = 3


// Why Sliding Window
// Substring must be continuous
// Window size changes dynamically
// We shrink window when a duplicate appears
// How it works
// Expand window: "a" → "ab" → "abc"
// Next char = a (duplicate)
// Shrink from left until duplicate is removed
// Continue tracking maximum length

function longestUnique(s) {
  let set = new Set();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

//Fixed Window
          //   Window size known
              // ➡ subtract left
              // ➡ add right

// Variable Window
        // Condition based
        //     ➡ expand right
        //     ➡ shrink left when violated
