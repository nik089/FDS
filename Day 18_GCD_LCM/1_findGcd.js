// Method 1: Brute Force (NOT RECOMMENDED)

function gcdBrute(a, b) {
  let gcd = 1;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

console.log(gcdBrute(12, 18)); // 6
console.log(gcdBrute(24, 36)); // 12
Complexity:
Time: O(min(a, b))
Space: O(1)


//=====================================


