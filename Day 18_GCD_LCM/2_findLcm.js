// Algorithm to Find LCM

// Best Approach (Using GCD)

// Complexity:
//         Time: O(log n)
//         Space: O(1)

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(12, 18)); // 6
console.log(lcm(12, 18)); // 36


//lcm of array
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return (a * b) / gcd(a, b);
}

function lcmOfArray(arr) {
  return arr.reduce((acc, num) => lcm(acc, num));
}

// Example
console.log(lcmOfArray([2, 6, 8])); // 24
