// Method 2: Euclidean Algorithm (INTERVIEW STANDARD)

gcd(a, b) = gcd(b, a % b)
//==================================
//Algorithm Steps (Simple):
// 1.If b === 0, return a
// 2.Replace:
//         a = b
//         b = a % b
// 3.Repeat
//==================================
// Repeat until remainder becomes 0.

// Example:
gcd(18, 12)
        = gcd(12, 6)
        = gcd(6, 0)
        = 6

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
//===============================================
// Recursive JS:
                function gcd(a, b) {
                if (b === 0) return a;
                return gcd(b, a % b);
                }

// Complexity:
//         Time: O(log min(a, b))
//         Space:
//             Iterative: O(1):
//             Recursive: O(log n)

