// Its meand constinue longest number like 1,2,3,4,5,6 like that ist mean ke 1 ka diff hoan chaiye
function longestConsecutive(arr) {
  const set = new Set(arr);
  let longest = 0;

  for (let n of set) {
    if (!set.has(n - 1)) {
      let count = 1;
      while (set.has(n + count)) count++;
      longest = Math.max(longest, count);
    }
  }
  return longest;
}

// Example usage:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, -1, 1, 2, -2, 3])); // Output: 6


// Input: `nums = [100, 4, 200, 1, 3, 2]`

// | num | count | While checks | Math.max(longest, count) | longest |
// | --- | --- | ---    | --- | --- |
// | 100 | 1 | 101 ❌  | max(0, 1) | 1 |
// | 4   | 1 | 5 ❌    | max(1, 1) | 1 |
// | 200 | 1 | 201 ❌  | max(1, 1) | 1 |
// | 1   | 4 | 2 ✅, 3 ✅, 4 ✅, 5 ❌ | max(1, 4) | 4 |
// | 3   | — | Skip | Not executed | 4 |
// | 2   | — | Skip | Not executed | 4 |

// Final Answer: 4Remember: While loop stops → `Math.max()` executes → For loop moves to next number.