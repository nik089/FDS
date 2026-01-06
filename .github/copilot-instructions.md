# Copilot Instructions for FDS JavaScript DSA Project

## Project Overview
This is a personal learning repository for Data Structures and Algorithms (DSA) problems in JavaScript. Solutions are organized by days, each focusing on a specific algorithmic technique (e.g., Brute Force, Sliding Window, Hashing).

## Running Code
- Execute individual `.js` files using Node.js: `node path/to/file.js`
- No build system or dependencies required; all code is pure JavaScript
- Outputs are logged via `console.log` for verification

## Coding Patterns
- **Function Structure**: Implement solutions as named functions (e.g., `maxSum`, `twoSum`) that take arrays and parameters, returning results directly
- **Commenting Style**: Include example inputs/outputs, conceptual explanations, and step-by-step tables visualizing algorithm execution
  - Example: Use markdown tables to show loop iterations, map states, or window sliding
- **Variable Naming**: Use descriptive names like `arr` for input arrays, `target` for search values, `sum` for accumulators
- **Technique Selection**:
  - Brute Force: Nested loops for O(n²) solutions (e.g., `Day 1 - Brute_Force_Approch/1_twoSum.js`)
  - Optimized: Single-pass algorithms (e.g., `DAY 2 – Optimized_Single_Pass/1_arr_sorted.js`)
  - Hashing: Use `Map` or `Set` for O(1) lookups (e.g., `DAY 3 – Hashing_map-set/1_two_sum.js`)
  - Sliding Window: For subarray problems with fixed/variable windows (e.g., `Day 4 Slide window/1_maximum_subarray_sum.js`)
  - Two Pointers: For sorted arrays or removal problems (e.g., `Day 5 Two pointer/`)
  - Stack: LIFO for reversal/validation (e.g., `Day 7 Stack (LIFO)/1_reverseString.js`)
  - Recursion/Memoization: For recursive solutions with caching (e.g., `Day 8 Recursion (basic)/`, `Day 9 Memoization_Caching/`)

## Key Files
- Reference `Day 4 Slide window/1_maximum_subarray_sum.js` for detailed explanatory comments and tables
- Compare brute force vs. optimized versions across days (e.g., two-sum in Day 1 vs. Day 3)

## Conventions
- Files named as `number_problem.js` within technique folders
- Focus on algorithmic clarity over production code (e.g., no error handling, direct returns)
- Include time/space complexity notes in comments</content>
<parameter name="filePath">c:\Users\Nitesh\OneDrive\Desktop\JS Question\FDS\.github\copilot-instructions.md