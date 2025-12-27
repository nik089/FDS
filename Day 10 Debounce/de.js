// 1. What is Debounce? (Very Simple Meaning)
//     “Wait until the user stops doing something, then run the function once.”


// 3. Why Do We Use Debounce?

//     // Because some user actions happen very frequently, and calling a function every time would:
//     // Slow down the app
//     // Overload the browser
//     // Send too many API calls
//     // Create bad user experience

// Debounce reduces unnecessary function calls.


// ==================================================================
// 4. When Do We Use Debounce? (Important)
// Use Debounce when you care about the FINAL action, not intermediate ones.
    // Common Frontend Use Cases
    // Situation	Why Debounce
    // Search input typing	Call API only after user stops typing
    // Window resize	Execute logic once after resize ends
    // Form validation	Validate after user finishes typing
    // Auto-save	Save after user stops editing//
//  ==========================================================
// User types "c"     → timer starts
// User types "a"     → timer resets
// User types "t"     → timer resets
// User stops typing  → 500ms passed → function runs

//=========================================================
// Summary (In One Line)
//     What: Wait and run once
//     Why: Avoid unnecessary calls
//     When: User typing / frequent events
//     How: Timer resets on each event
// =========================================================

function debounce(func, delay) {
  let timer;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  }
}

// Example Usage:
function searchAPI() {
  console.log("API Called");
}
const debouncedSearch = debounce(searchAPI, 500);
console.log(debouncedSearch());


// c      a      t
// |------|------|
// timer reset every time

// STOP typing
// |-----500ms-----| → API Called 








