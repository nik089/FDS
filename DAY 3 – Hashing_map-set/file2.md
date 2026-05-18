  (1) Method Name
  Hashing (using Map / Set in JavaScript)

  (2) What is Hashing?
 Store data in key–value form so that lookup, insert, and delete operations are very fast.

 Hashing means storing data in a way that allows FAST lookup.
  Instead of searching line by line, we:

Convert data into a key
Store it in a table (hash table)
Retrieve it in constant time

  ==> In JavaScript, hashing is done using:
Map
Set
Object (less preferred in interviews)

In JavaScript:
  Map → key–value pairs
  Set → unique values only
  Object → also key–value, but Map is preferred in interviews


  (3) Why is Hashing used?
  Hashing is used to:
  Remove nested loops
  Avoid repeated comparisons
  Optimize O(n²) → O(n)

Interviewers love hashing because it shows:
  Optimization mindset
  Proper data structure choice
  Clean JavaScript knowledge

(4)When should you use Hashing?
  Use Hashing when:
  You need fast lookup
  You are checking duplicates
  You are counting frequency
  You need to remember previous elements

Do NOT use hashing when:
  Memory is extremely limited
  Order is the only concern (sometimes arrays are better)

(5)Time & Space Complexity
  Time Complexity: O(n)
  Space Complexity: O(n)

Map vs Object=>
  “I prefer Map over Object for hashing because
  it supports any key type and has predictable performance.”


==================================================
Without Hashing (Brute Force):
for (...) {
  for (...) {
    // compare elements
  }
}

Time: O(n²)
================================================
With Hashing:
lookup[key] = value;

Time: O(1) (average)

===============================================
  (3) Real-Life Analogy (Very Important)
  Think of a phone contacts list:
   (X)Without hashing:
  You scroll through all contacts → slow

    (✓)With hashing:
  You type name → direct access
  That “direct access” is hashing.