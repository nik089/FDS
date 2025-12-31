// "AABABBA", K = 1
// // 4 → "AABAA" or "ABBAA"


function characterReplacement(s, k) {
  let freq = {};
  let left = 0, maxFreq = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;
    maxFreq = Math.max(maxFreq, freq[s[right]]);

    if (right - left + 1 - maxFreq > k) {
      freq[s[left]]--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
