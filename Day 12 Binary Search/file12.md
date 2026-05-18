1. Binary Search Complete Guide

Binary Search is an efficient algorithm for finding an element in a sorted list by repeatedly dividing the search 
space in half, achieving O(log n) time complexity.
==========================================================

2. Prerequisites
  - Data must be sorted (ascending or descending)
  - Must support random-access (arrays preferred)
==========================================================

## Use Cases
    **Ideal for:**
    - Sorted arrays
    - Fast search requirements
    - Static/infrequently changing data
==========================================================

**Avoid for:**
    - Unsorted arrays
    - Linked lists
    - Frequent insert/delete operations
==========================================================

## Algorithm Flow
    1. Find middle element of search space
    2. Compare with target value
    3. Eliminate half of remaining space
    4. Repeat until target found or space exhausted
==========================================================

## Complexity Analysis
    | Case | Complexity | Note |
    |------|-----------|------|
    | Best | O(1)      | Target at middle position |
    | Average | O(log n) | Expected case |
    | Worst | O(log n) | Complete halving required |
    | Space | O(1) | Iterative approach |
==========================================================

## Key Variants
  - First/Last occurrence of duplicate elements
  - Insert position (Lower/Upper Bound)
  - Search in rotated sorted array
  - Peak element detection
  - Square root calculation
  - Floor/Ceiling operations

==========================================================

## Decision Pattern
    Binary search follows a binary decision tree where each comparison eliminates one half of the remaining search space, 
    creating a logarithmic execution path.

  (1) What is Binary Search?
    Binary Search is an efficient algorithm to find an element in a sorted list.
    Key idea:

    Repeatedly divide the search space in half.
    Instead of checking all elements (like linear search), it jumps to the middle, 
    decides which half is useless, and discards it.
==============================================================
Works ONLY when data is:
    ✔ sorted (ascending or descending)
    ✔ random-access (arrays)

  (2) When can we use Binary Search?
    Use it when:
      ✔ array is sorted
      ✔ you need fast search
      ✔ values are static (not changing often)

Do NOT use when:
      ✘ unsorted array
      ✘ linked list
      ✘ heavy insert/delete operations

  (3) Algorithm (concept)
      Given sorted array:
      [2, 4, 6, 8, 10, 12]
      target = 8

Steps:
      (1) take the middle element
      (2) if mid == target → found
      (3) if target < mid → search left half
    (4)if target > mid → search right half
    (5)repeat until nothing left

=============================================================
🔧 Iterative Code (most common in interviews):

          function binarySearch(arr, target) {
            let left = 0, right = arr.length - 1;

            while (left <= right) {
              let mid = Math.floor((left + right) / 2);

              if (arr[mid] === target) return mid;
              else if (arr[mid] < target) left = mid + 1;
              else right = mid - 1;
            }
            return -1;   // not found
          }

==================================================================
(4)Dry-run example (step-by-step)
        Array:
        [2, 4, 6, 8, 10, 12]
        target = 8
        step	left	right	mid	arr[mid]	decision
        1	0	5	2	6	target > mid → go right
        2	3	5	4	10	target < mid → go left
        3	3	3	3	8	found

Answer: index 3

====================================================================
(5)Time & Space Complexity
Case	Complexity	Why
Best	O(1)	found mid first try
Average	O(log n)	divide in half each iteration
Worst	O(log n)	keep halving until 1
Space	O(1)	iterative, no extra memory

===============================================================

             [2,4,6,8,10,12]
                 mid=6
               /       \
     left half         right half
  [2,4]                 [8,10,12]
                          mid=10
                        /       \
                     [8]       [12]
                    mid=8  → FOUND
===============================================================
  (1) First & Last Position of Element in Sorted Array
([2,4,4,4,6,8], 4); // [1, 3]

  (2) Insert Position (Lower Bound)
([1,3,5,6], 4); // 2

  (3) Search in Rotated Sorted Array;
([4,5,6,7,0,1,2], 0); // 4

(4)Square Root (Binary Search on Answer)
((16)); // 4

(5)Find Peak Element;
[1,2,3,1]  → peak = 3 (index 2)
