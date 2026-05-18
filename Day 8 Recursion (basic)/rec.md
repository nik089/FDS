1. What Is Recursion? (Simple Definition)

    Recursion means:
    A function that calls itself to solve a problem.
    Instead of solving the whole problem at once, the function:
    Solves a small part
    Calls itself for the remaining part

2. Very Simple Real-Life Example
Stairs Example
You are on step 5 and want to reach step 0.
You think:
    “To reach step 0, I must first reach step 4”
    “To reach step 4, I must reach step 3”
    Continue until step 0
    This thinking is recursion.

=================================================
function countdown(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(3)
====================================================

function factorial(n) {
  if (n === 1) {
    return 1;   // base case
  }
  return n * factorial(n - 1);
}
factorial(4) //24

factorial(4)
→ 4 * factorial(3)
→ 4 * (3 * factorial(2))
→ 4 * (3 * (2 * factorial(1)))
→ 4 * (3 * (2 * 1))
→ 24


12. Interview One-Line Answer (Memorize)
Recursion is a technique where a function calls itself to solve a problem
by breaking it into smaller subproblems, with a base case to stop execution.

13. When NOT to Use Recursion
Very deep calls (stack overflow risk)
Simple iterations
Performance-critical loops
