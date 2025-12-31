"araaci", K = 2
// output = 4

// Why Sliding Window?
//   All substrings must be continuous.
//   Window size changes dynamically.
//   We shrink window when we have more than K distinct characters.
// How it works (concept)
//   Expand window: "a" → "ar" → "ara" → "arac" (now 3 distinct chars)
//   Shrink from left until we have only K distinct chars: "rac"
//   Continue expanding: "raci" (now 3 distinct chars again)
//   Shrink from left: "aci"
//   Maximum length = 4 ("arac")


function longestKDistinct(s, k) {
  let freq = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;

    while (Object.keys(freq).length > k) {
      freq[s[left]]--;
      if (freq[s[left]] === 0) {
        delete freq[s[left]];
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}


// | Left | Right | Window | Distinct | Valid | Max |
// | ---- | ----- | ------ | -------- | ----- | --- |
// | 0    | 0     | a      | 1        | ✅     | 1   |
// | 0    | 1     | ar     | 2        | ✅     | 2   |
// | 0    | 2     | ara    | 2        | ✅     | 3   |
// | 0    | 3     | araa   | 2        | ✅     | 4   |
// | 1    | 4     | raac   | 3        | ❌     | 4   |
// | 2    | 4     | aac    | 2        | ✅     | 4   |
// | 4    | 5     | ci     | 2        | ✅     | 4   |
