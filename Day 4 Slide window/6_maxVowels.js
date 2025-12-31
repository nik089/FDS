// "abciiidef", K = 3
// 3 → "iii"


function maxVowels(s, k) {
  let vowels = new Set(['a','e','i','o','u']);
  let count = 0, max = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (i >= k && vowels.has(s[i - k])) count--;
    max = Math.max(max, count);
  }
  return max;
}
