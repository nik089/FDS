"araaci", K = 2
// output = 4

// Why Sliding Window?
//   All substrings must be continuous.
//   Window size changes dynamically.
//   We shrink window when we have more than K distinct characters.
// How it works (concept)
//   Expand window: "a" → "ar" → "ara" → "arac" (now 3 distinct chars)
//   Shrink from left until we have only K distinct chars: "rac"
//   Continue expanding: "raci" (now 3 distinct chars again)
//   Shrink from left: "aci"
//   Maximum length = 4 ("arac")
