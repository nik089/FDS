// 1. Sum of Two Integers ((Without using + or -)


var getSum = function(a, b) {
  while (b !== 0) {
    let carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
};

console.log(getSum(5, 3)); // 8



// | Iteration | a (binary) | b (binary) | a & b | carry = (a & b) << 1 | a = a ^ b | b = carry |
// | --------- | ---------- | ---------- | ----- | -------------------- | --------- | --------- |
// | Start     | 0101 (5)   | 0011 (3)   | —     | —                    | —         | —         |
// | 1         | 0101 (5)   | 0011 (3)   | 0001  | 0010 (2)             | 0110 (6)  | 0010 (2)  |
// | 2         | 0110 (6)   | 0010 (2)   | 0010  | 0100 (4)             | 0100 (4)  | 0100 (4)  |
// | 3         | 0100 (4)   | 0100 (4)   | 0100  | 1000 (8)             | 0000 (0)  | 1000 (8)  |
// | 4         | 0000 (0)   | 1000 (8)   | 0000  | 0000 (0)             | 1000 (8)  | 0000 (0)  |


// Why XOR alone is NOT enough
// 1 ^ 1 = 0:

// Correct? Yes — partially.
// But where did the extra 1 go?
// It is missing.
// That missing 1 is the carry.


// How the computer finds carry:
// Carry happens only when both bits are 1.
// That is why: a & b
// Because: 1 & 1 = 1  ← carry detected


// Why we shift carry left:
// Carry belongs to the next bit, not the current one:

//    1   ← carry
//   ---
//   0   ← current bit

//   (a & b) << 1


// Why carry must be added again: Sometimes carry itself causes another overflow.
//     0111
//     +0001
//     -----
//     1000
// Carry travels across multiple bits.

// So we repeat until:
// carry === 0




var getSubtract = function(a, b) {
  while (b !== 0) {
    let borrow = (~a & b) << 1;
    a = a ^ b;
    b = borrow;
  }
  return a;
};

// Why this works (conceptual)

// In subtraction:
//         XOR (a ^ b) → subtract without borrow
//         ~a & b → finds where borrow is needed
//         << 1 → moves borrow to the next higher bit
//         Loop continues until no borrow remains

// This is exactly parallel to addition with carry.

// | Iteration | a (binary) | b (binary) | ~a & b | borrow << 1 | a ^ b |
// | --------- | ---------- | ---------- | ------ | ----------- | ----- |
// | Start     | 0101 (5)   | 0011 (3)   | —      | —           | —     |
// | 1         | 0101       | 0011       | 0010   | 0100        | 0110  |
// | 2         | 0110       | 0100       | 0000   | 0000        | 0010  |



 

