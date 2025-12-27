// 1. What is Throttle? (Very Simple)   
     
//     Throttle means:
// 👉 “Allow something to happen only once in a fixed time.”
        // Even if you try many times, it will not happen again until time passes.
//  ==========or

// Throttle means:
//     “Allow a function to run at most once in a fixed time interval.”
// No matter how many times the event happens, the function runs regularly, not continuously.


// 2. Real-Life Example (Very Basic)
//     Water Tap Example
//     You open a tap fully.
//     Water flows continuously
//     But throttle is like limiting flow to once every second
//     Even if pressure is high, output is controlled.

// or
// 2️⃣ Real-Life Example (Very Simple)
// 🚦 Traffic Signal Example
//     Green light stays ON for 30 seconds
//     Cars cannot change signal faster than that
//     No matter how many cars come:
//     Light changes only after fixed time
// 👉 This is Throttle


// 3. Why Do We Use Throttle?
// Some events happen too frequently, such as:
//     Scrolling
//     Mouse movement
//     Window resizing
// Calling a function every time would:

//     Slow UI
//     Cause lag
//     Waste CPU resources
// Throttle keeps performance smooth.



// 4. How Throttle Works (Step by Step)

    // First event → function runs immediately
    // Next events within delay → ignored
    // After delay → function allowed again
    // Continues at fixed intervals

function throttle(func, delay) {
  let lastCall = 0;
    return function() {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, arguments);
        }   
    }
}
// Example Usage:
function onScroll() {
  console.log("Scroll event handled");
}
const throttledScroll = throttle(onScroll, 1000);
console.log(throttledScroll());
// User scrolls:
// |----|----|----|----|----|
// func runs at most once every 1000ms
// ==========================================================
// 5. When Do We Use Throttle? (Important)
// Use Throttle when you care about REGULAR intervals, not every single event.
    // Common Frontend Use Cases
    // Situation	        Why Throttle
    // Scrolling	        Update UI at intervals during scroll
    // Mouse movement	    Track position without overload
    // Window resizing	Adjust layout periodically
    // Button clicks	    Limit rapid clicks on actions
// ==========================================================
// Summary (In One Line)
//     What: Run at most once in interval
//     Why: Maintain performance
//     When: Frequent continuous events
//     How: Time check before each call
// ==========================================================   


// Deboube vs Throttle Summary:
// Debounce:
//     Waits until events stop
//     Runs once after delay
//     Ideal for final actions
//     Examples: Search input, form validation

// Type → Type → Type → STOP → Function run

// Throttle:
//     Runs at regular intervals
//     Ignores excess events
//     Ideal for ongoing actions
//     Examples: Scrolling, mouse movement

// Scroll → run → wait → run → wait → run
// ==========================================================


function throttle(fn, time) {
  let canRun = true;

  return function () {
    if (!canRun) return;

    fn();
    canRun = false;

    setTimeout(() => {
      canRun = true;
    }, time);
  };
}
// Example Usage:
function scrollAction() {
  console.log("Scroll handled");
}
const throttledScroll1 = throttle(scrollAction, 1000);
window.addEventListener("scroll", throttledScroll1);
// Scroll handled
// (wait 1 second)
// Scroll handled
// (wait 1 second)


// User resizes window:
// |----|----|----|----|----|
// func runs at most once every 2000ms
// ==========================================================
// 6. Summary
// Throttle controls function calls to improve performance during frequent events.
// Use Throttle for ongoing actions where regular updates are needed without overwhelming the system.
// Use Debounce for final actions where only the last event matters.
// Debounce reduces unnecessary function calls.
