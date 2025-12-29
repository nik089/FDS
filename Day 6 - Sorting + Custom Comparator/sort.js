// JavaScript sorting requires a custom comparator to correctly sort numbers, objects, or 
// complex business logic because the default sort treats elements as strings.

// 1️⃣ Why does [10, 2, 5].sort() give wrong output?
//     Why is the output incorrect?

    [10, 2, 5].sort();  
//     output = [10, 2, 5] ❌

    
[10, 2, 5].sort((a, b) => a - b);
// [2, 5, 10]
// Because JavaScript sorts elements as strings by default, not numbers.


// 2️⃣ How do you sort numbers in ascending and descending order?
    const arr = [5, 1, 9, 2];
    arr.sort((a, b) => a - b); // Ascending
    arr.sort((a, b) => b - a); // Descending

// 3️⃣ How do you sort an array of objects by a property?
    const users = [
  { name: 'Amit', age: 30 },
  { name: 'Ravi', age: 25 }
];

users.sort((a, b) => a.age - b.age); //[{name:'Ravi', age:25}, {name:'Amit', age:30}]

// 4️⃣ How do you sort strings alphabetically (case-insensitive)?
const names = ['Zara', 'adam', 'Bob'];
names.sort((a, b) => a.localeCompare(b));

// 5️⃣ How do you sort by multiple fields?
    // Sort by age, then name.
// users.sort((a, b) => {
//   if (a.age !== b.age) {
//     return a.age - b.age;
//   }
//   return a.name.localeCompare(b.name);
// });

// 6️⃣ How do you sort even numbers first, then odd numbers?
const arr1 = [1,2,3,4,5,6];
arr1.sort((a, b) => {
  if (a % 2 === 0 && b % 2 !== 0) return -1;
  if (a % 2 !== 0 && b % 2 === 0) return 1;
  return a - b;
}); //[2,4,6,1,3,5]

// 7️⃣ Does sort() mutate the original array?
//  ✅ Yes
const sorted = [...arr].sort((a, b) => a - b);

const dates = [
  new Date('2024-01-10'),
  new Date('2023-12-01')
];

dates.sort((a, b) => a - b);

// 9️⃣ How do you sort array by string length?

const words = ['apple', 'hi', 'banana'];
words.sort((a, b) => a.length - b.length);  
console.log(word) //['hi', 'apple', 'banana']

// 🔟 How do you sort without modifying original data? (Angular)
const sortedProducts = [...products].sort(
  (a, b) => a.price - b.price
);

// 11.Sort an array and remove duplicates.
const arr11 = [3,1,2,2,3,4];
const result = [...new Set(arr11)].sort((a,b)=>a-b); //[1,2,3,4]


// 🎯 TOP 5 YOU MUST REMEMBER FOR INTERVIEW
    // Default sort is string-based
    // Always use comparator for numbers
    // sort() mutates original array
    // localeCompare() for strings
    // Spread operator for immutability
// ===================================================================

// Comparator (Sorting)
    // A comparator is a function that tells JavaScript how to compare two values while sorting.
        // In simple words:
        // “When sorting two items, which one should come first?”


// 2️⃣ Why Do We Need a Comparator?
//     JavaScript’s default sort():
//     Converts values to strings
//     Sorts alphabetically (lexicographically)

// Problem Example
                [10, 2, 5].sort();
                            // Output: [10, 2, 5] ❌ 
                                    // "10" comes before "2" alphabetically

// 3️⃣ Comparator Function Syntax
        // array.sort((a, b) => {
        //         return a - b;
        //         });

