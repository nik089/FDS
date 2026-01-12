// Event Queue (Event Loop)

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// output:
//             Start
//             End
//             Promise
//             Timeout
//=======================================
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => {
  console.log("C");
  setTimeout(() => console.log("D"), 0);
});

console.log("E");

// A
// E
// C
// B
// D

// Explanation:
//         Sync → A, E
//         Microtask → C
//         Task queue → B
//         New timeout → D

