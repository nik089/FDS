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
