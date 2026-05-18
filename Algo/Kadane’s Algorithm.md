Kadane’s Algorithm — Step-by-Step (Algorithm):
=================================================
Kadane’s Algorithm finds the maximum sum of a contiguous subarray using dynamic programming in linear time.

Input:
    An array A of size n

Output:
    Maximum sum of a contiguous subarray
==============================================
Algorithm

            1.Initialize:
                    ==> currentSum = A[0]
                    ==> maxSum = A[0]

            2.For i = 1 to n - 1:
                1.Update current sum:
                    ==> currentSum = max(A[i], currentSum + A[i])

                2.Update maximum sum:
                    ==> maxSum = max(maxSum, currentSum)
             3.Return maxSum

=======================================================
When to Use This Algorithm
        Maximum / minimum contiguous subarray
        Array may contain negative numbers
        Need optimal solution in one pass

=======================================================
Why Do We Need Kadane’s Algorithm?
Brute Force Approach (X)
Try all subarrays.
            Time complexity: O(n²) or O(n³)
            Too slow for interviews and real systems
=========================================================
Kadane’s Algorithm:
        Single pass
        Uses previous result
        Time complexity: O(n)
        Space complexity: O(1)

======================================================
eg:
[-2, 1, -3, 4, -1, 2, 1]
            ==> Contains negative numbers
            ==> We must decide where to stop and restart.
** The best contiguous subarray is the one with the maximum sum. (4 + (-1) + 2 +1) ==6


[-3, -2, -5, -1]:
           ==> All values are negative
           ==> We must choose the least negative single element
           ==> contiguous subarray(-1)