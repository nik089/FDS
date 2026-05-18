1. What is Binary?
        Binary is a base-2 number system that uses only:

        0 and 1

Decimal to Binary Example:
                    Decimal: 13
                    13 / 2 = 6 remainder 1
                    6  / 2 = 3 remainder 0
                    3  / 2 = 1 remainder 1
                    1  / 2 = 0 remainder 1

                    Binary = 1101

Binary Place Values:
                    Binary:   1   1   0   1
                    Position: 8   4   2   1

                    Value = 8 + 4 + 0 + 1 = 13
===========================================================================================
2. Bitwise Operators (VERY IMPORTANT):

| Operator    | Symbol | Meaning             |              |
| ----------- | ------ | ------------------- | ------------ |
| AND         | `&`    | Both bits must be 1 |              |
| OR          | `      | `                   | Any bit is 1 |
| XOR         | `^`    | Bits are different  |              |
| NOT         | `~`    | Flip bits           |              |
| Left Shift  | `<<`   | Multiply by 2       |              |
| Right Shift | `>>`   | Divide by 2         |              |

=============================================================================================

1. AND (&) : Both bits must be 1 → result is 1
Truth Table:

            1 & 1 = 1
            1 & 0 = 0
            0 & 1 = 0
            0 & 0 = 0

Example:
            5 = 0101
            3 = 0011
            ---------
            5 & 3 = 0001  → 1
            console.log(5 & 3); // 1

Where Used (Interview):
            Check if a bit is set
            Finding even/odd (n & 1)
            Bit masking
===================================================
2. OR (|) : If any bit is 1 → result is 1
Truth Table:

            1 | 1 = 1
            1 | 0 = 1
            0 | 1 = 1
            0 | 0 = 0

Example:
            5 = 0101
            3 = 0011
            ---------
            5 & 3 = 0111  → 7
            console.log(5 | 3); // 7

Where Used (Interview):
            Set a specific bit
            Combine flags / permissions
============================================================
3. XOR (^): 
        ===> Bits are different → 1
        ===> Bits are same → 0
Truth Table:

            1 ^ 1 = 0
            1 ^ 0 = 1
            0 ^ 1 = 1
            0 ^ 0 = 0

Example:
            5 = 0101
            3 = 0011
            ---------
            5 & 3 = 0110 → 6
            console.log(5 ^ 3); // 6

Key Properties (VERY IMPORTANT):

            a ^ a = 0
            a ^ 0 = a
            a ^ b ^ a = b


Where Used (Interview):
           Missing number
           Find unique element
           Swap numbers without temp
=============================================================
4. NOT (~) : Flips all bits (0 → 1, 1 → 0):

Important (JavaScript Uses 32-bit Signed):  ~n = -(n + 1)

eg:
        n = 5
        Binary: 00000000 00000000 00000000 00000101
        ~5    = 11111111 11111111 11111111 11111010
        Decimal = -6

        console.log(~5); // -6

Where Used (Interview):
          Bit masking
          Rarely asked directly
          Understanding 2’s complement
================================================================
5. Left Shift (<<) : Shift bits to left ===>  multiply by 2
Example:
        5 = 0101
        5 << 1 = 1010 → 10
        5 << 2 = 10100 → 20

        explain: Number = 5
         Step 1: Write in binary : 5 = 0101
         Step 2: Left shift by 1 → 5 << 1 : Move every bit one position left:
                                            Before: 0101
                                            After : 1010

         Step 3: Convert back to decimal : 1010 = 8 + 2 = 10
         Final Result :  5 << 1 = 10

JavaScript:
        console.log(5 << 1); // 10
        console.log(5 << 2); // 20

Formula:
        n << k = n * (2^k)

Where Used (Interview):
        Fast multiplication
        Bit masks
        Binary arithmetic
================================================================
6. Right Shift (>>) : Shift bits to right ===>  divide by 2 (keeps sign)

Example:
        10 = 1010
        10 >> 1 = 0101 → 5

JavaScript: console.log(10 >> 1); // 5

Formula: n >> k = Math.floor(n / (2^k))

Interview Note : Preserves sign bit
                 Used in dividing numbers

====================================================================
7.Unsigned Right Shift (>>>) : this is not a Operator and its Unsigned Right Shift Operator

console.log(-5 >> 1);   // -3
console.log(-5 >>> 1); // 2147483645

Using >>> 1:
10000000 >>> 1 = 01000000  ✅ (0 filled)
Shifts bits one position to the right
Fills the leftmost bit with 0


==========================================================================
Rule of the box:
        A box can store only ONE value
        In binary, that value can be 0 or 1
        Nothing else fits

1. What happens when the box overflows?
Case 1 :  0 + 0 = 0    ==> Fits. No problem.
Case 2 :  0 + 1 = 1    ==> Fits. No problem.
Case 3 :  1 + 0 = 1    ==> Fits. No problem.
Case 4 (IMPORTANT) : 1 + 1 = 2  ==> But the box cannot store 2.
                                ==> So we must do this:  1 + 1 = 10

Meaning:
Put 0 in the current box
Send 1 to the next box  : That sent 1 is called CARRY.


Visual explanation (THIS is the key):

 Current bit     Next bit
     ↓              ↓
   [ 1 ] + [ 1 ]  → [ 0 ] + carry 1
   
Carry is extra value that does not fit in the current bit.











