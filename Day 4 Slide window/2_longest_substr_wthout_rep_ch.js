// Input = "abcabcbb";
// 3   → "abc"
// // Output = 3


// Why Sliding Window
// Substring must be continuous
// Window size changes dynamically
// We shrink window when a duplicate appears
// How it works
// Expand window: "a" → "ab" → "abc"
// Next char = a (duplicate)
// Shrink from left until duplicate is removed
// Continue tracking maximum length