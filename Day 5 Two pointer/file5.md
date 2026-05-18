  (1) What is the Two Pointer technique? (Very Simple)
  Two Pointer means:
  Using two indexes (pointers) to traverse a data structure (usually an array or string)
  at the same time instead of using nested loops.

Typically:
  One pointer starts at the beginning
  The other starts at the end (or both start at beginning and move differently)

  (2) Why do we use Two Pointer?
    Because it:
      Reduces time complexity
      Converts O(n²) (nested loops) → O(n)
      Makes code cleaner and faster
      Interview one-liner
      Two pointer is used to efficiently process arrays or strings
        by avoiding unnecessary nested loops.

  (3) When should you use Two Pointer? (IMPORTANT)
    Use Two Pointer when ALL or MOST of these are true:

    | Condition                            | Yes / No |
    | ------------------------------------ | -------- |
    | Data is **array or string**          |   (✓)       |
    | You need to compare **two elements** |   (✓)       |
    | Problem involves **pairs / ranges**  |   (✓)       |
    | Array is **sorted** (often)          |   (✓)       |
    | You want better than O(n²)           |   (✓)       |


(4)Types of Two Pointer
      Type 1: Opposite Direction
        One pointer at start
        One pointer at end

      Used for:
        Reverse
        Palindrome
        Pair sum

    Type 2: Same Direction (Fast & Slow)
      Both start at beginning
      One moves faster

      Used for:
        Remove duplicates
        Sliding/compacting array
        Filtering in-place


(5)How Two Pointer Works (Concept)
   Example array:

   [1, 2, 3, 4, 5]
    L              R

    Compare L and R
    Move pointers based on condition
    Stop when pointers meet
==============================================
Complexity (Must Say in Interview)

Time: O(n)
Space: O(1) (in-place) or O(n) if extra array used;

Interview One-Line Answer (MEMORIZE)
  The two pointer technique uses two indexes to traverse data efficiently,
  reducing time complexity and avoiding nested loops, especially useful for arrays and strings.