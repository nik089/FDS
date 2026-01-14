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

Complexity:
            Time: O(min(a, b))
            Space: O(1)


//=====================================

//GCD of an Array (BONUS):
function gcdArray(arr) {
  return arr.reduce((acc, num) => gcd(acc, num));
}

console.log(gcdArray([12, 18, 24])); // 6

