// s = "ADOBECODEBANC"
// t = "ABC"
// // "BANC"


function minWindow(s, t) {
  let need = {};
  for (let c of t) need[c] = (need[c] || 0) + 1;

  let left = 0, count = t.length;
  let minLen = Infinity, start = 0;

  for (let right = 0; right < s.length; right++) {
    if (need[s[right]] > 0) count--;
    need[s[right]]--;

    while (count === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }
      need[s[left]]++;
      if (need[s[left]] > 0) count++;
      left++;
    }
  }
  return minLen === Infinity ? "" : s.slice(start, start + minLen);
}
