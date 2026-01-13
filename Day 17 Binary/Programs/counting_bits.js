// Counting Bits:

// What is the problem?
// For every number from 0 to n, return how many 1s each number has.


// n = 5

// 0 → 0 → 0
// 1 → 1 → 1
// 2 → 10 → 1
// 3 → 11 → 2
// 4 → 100 → 1
// 5 → 101 → 2

// Core Pattern (DP + Bit):

//                     bits[i] = bits[i >> 1] + (i & 1)

//                     | Expression | Meaning                |
//                     | ---------- | ---------------------- |
//                     | `i >> 1`   | Divide by 2            |
//                     | `i & 1`    | Check if last bit is 1 |


// | i | i (binary) | i >> 1 | i >> 1 (binary) | res[i >> 1] | i & 1 | res[i] |
// | - | ---------- | ------ | --------------- | ----------- | ----- | ------ |
// | 0 | 0000       | —      | —               | 0           | —     | 0      |
// | 1 | 0001       | 0      | 0000            | 0           | 1     | 1      |
// | 2 | 0010       | 1      | 0001            | 1           | 0     | 1      |
// | 3 | 0011       | 1      | 0001            | 1           | 1     | 2      |
// | 4 | 0100       | 2      | 0010            | 1           | 0     | 1      |
// | 5 | 0101       | 2      | 0010            | 1           | 1     | 2      |
