s = "cbaebabacd"
p = "abc"
// Output = [0,6] → ["cba","bac"]
// cba  → match → index 0 ✅
//  bae
//   aeb
//    eba
//     bab
//      aba
//       bac → match → index 6 ✅
//        acd


function findAnagrams(s, p) {
  let result = [];

  // How many of each character do we need?
  let freq = {};

  for (let c of p) {
    freq[c] = (freq[c] || 0) + 1;
  }

  // left = beginning of window
  // count = how many required characters are still missing
  let left = 0;
  let count = p.length;

  // right = end of window
  for (let right = 0; right < s.length; right++) {

    // Take s[right] into our window
    // If we actually needed it, decrease count
    if (freq[s[right]]-- > 0) {
      count--;
    }

    // Once window reaches size p.length
    if (right - left + 1 === p.length) {

      // count === 0 means we have all required characters
      if (count === 0) {
        result.push(left);
      }

      // Remove s[left] from the window
      // If it was a required character,
      // we now need one more of it
      if (freq[s[left]]++ >= 0) {
        count++;
      }

      // Move window forward
      left++;
    }
  }

  return result;
}
