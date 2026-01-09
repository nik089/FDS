  (1) Method Name
    Optimized Single Pass

  (2) What is it?

    Optimized Single Pass means:
    Solve the problem by traversing the array only once and updating required values during that traversal.

Technically:
    Only one loop
    No nested loops
    Use variables to track result

  (3) Why it is used?
    It is used to:
    Remove unnecessary nested loops
    Improve performance

Reduce O(n²) → O(n)
Interviewers like this because it shows:
Observation skill
Optimization mindset
Clean logic

(4)When it is used?
    Use Optimized Single Pass when:
    You need max / min / sum / count
    Result depends on previous values
    Problem can be solved incrementally

Avoid when:
    You need combinations or pairs
    Order matters across multiple indices

(5)Time & Space Complexity
    Time Complexity: O(n)
    Space Complexity: O(1)