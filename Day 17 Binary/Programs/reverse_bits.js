// What is the problem?
// Reverse the bits of a 32-bit unsigned integer.


// n = 101
// Reverse → 101000... (32 bits)


// Core Idea:
//         Read last bit: n & 1
//         Shift result left
//         Shift n right


// eg:
//     Input  : 00010110 
//     Index  : 76543210   (bit positions)==>reveser bit



var reverseBits = function(n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n = n >>> 1;
  }

  return result >>> 0;
};



// | Step | n (before) | n & 1 | result before | result after | n >>> 1  |
// | ---- | ---------- | ----- | ------------- | ------------ | -------- |
// | 1    | 00010110   | 0     | 00000000      | 00000000     | 00001011 |
// | 2    | 00001011   | 1     | 00000000      | 00000001     | 00000101 |
// | 3    | 00000101   | 1     | 00000001      | 00000011     | 00000010 |
// | 4    | 00000010   | 0     | 00000011      | 00000110     | 00000001 |
// | 5    | 00000001   | 1     | 00000110      | 00001101     | 00000000 |
// | 6    | 00000000   | 0     | 00001101      | 00011010     | 00000000 |
// | 7    | 00000000   | 0     | 00011010      | 00110100     | 00000000 |
// | 8    | 00000000   | 0     | 00110100      | 01101000     | 00000000 |

