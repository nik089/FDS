// Number of 1 Bits (Hamming Weight):

// Count how many 1s are in the binary representation of a number.

// n = 11
// Binary = 1011
// Number of 1s = 3

function hammingWeight(n){
    let count  = 0;
    while(n !=0){
        n = n & (n-1);
        count ++
    }
    return count ++
}

console.log(hammingWeight(11)) // 3

// | Iteration | n (decimal) | n (binary) | n - 1 (binary) | n & (n - 1) | count |
// | --------- | ----------- | ---------- | -------------- | ----------- | ----- |
// | Start     | 11          | 1011       | —              | —           | 0     |
// | 1         | 11          | 1011       | 1010           | 1010 (10)   | 1     |
// | 2         | 10          | 1010       | 1001           | 1000 (8)    | 2     |
// | 3         | 8           | 1000       | 0111           | 0000 (0)    | 3     |


// how to subtract work
// n = 101000
// Reading from right to left:
//                 Bit 0 = 0 → cannot borrow
//                 Bit 1 = 0 → cannot borrow
//                 Bit 2 = 0 → cannot borrow
//                 Bit 3 = 1 → CAN borrow here
            
// So borrowing does this:
//                         1 becomes 0
//                         and all bits to the right become 1

// so: 101000  → 100111

// That is: n - 1 = 100111
//=======================================================================
// now why apply AND in upper problem

// n     = 101000
// n - 1 = 100111
// ----------------
// &     = 100000

// What happened?:
//             The rightmost 1 was removed
//             All trailing bits became 0 (Bits that do NOT change with original means )

// | Operation     | Trailing bits |
// | ------------- | ------------- |
// | `n - 1`       | become `1`    |
// | `n & (n - 1)` | become `0`    |
