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