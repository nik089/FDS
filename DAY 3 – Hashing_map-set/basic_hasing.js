// 1.map
// ✔ Any key type
// ✔ Order preserved
// ✔ Clean API
// ✔ Preferred in interviews

// get map indexes
arr=[2,7,11,15];
const map=new Map();
map.get(2);  // 0
map.get(7);  // 1
map.get(11); // 2
map.get(15); // 3


// =========================================================

const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');

console.log(myMap.get('name')); // John
console.log(myMap.has('age')); // true
myMap.delete('city');       
console.log(myMap.size); // 2

myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
}); /// name: John
   /// age: 30


// ========================================================
// 2.Set (Unique values only)
// ✔ Removes duplicates
// ✔ Fast lookup
// ✔ Used for uniqueness

const mySet = new Set();  
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate, will not be added   
console.log(mySet.has(2)); // true

mySet.delete(3);       
console.log(mySet.size); // 2
mySet.forEach((value) => {
    console.log(value);
}); // 1
   /// 2
// ============================================================
// 3. Object (Allowed but not preferred)
//  (X)Keys only strings
//  (X)Prototype issues
//  (X)Less predictable
const myObject = {};
myObject['name'] = 'Alice';
myObject['age'] = 25;
console.log(myObject['name']); // Alice
console.log('age' in myObject);// true

delete myObject['age'];
console.log(Object.keys(myObject).length); // 1


// | Feature          | Map       | Set         | Object    |
// | ---------------- | --------- | ----------- | --------- |
// | Stores           | Key–Value | Values only | Key–Value |
// | Duplicate keys   |  (X)        |  (X)          |  (X)        |
// | Key types        | Any       | Value only  | String    |
// | Lookup time      | O(1)      | O(1)        | O(1)      |
// | Interview choice | ***       | **          | *         |


// ======================================================================================
// If the problem contains ANY ONE of these words:
// 1.duplicate
// 2.frequency
// 3.count
// 4.unique
// 5.seen
// 6.previous
// 7.lookup
// 8.anagram
// 9.pair
// 10.intersection
//   ==> Hashing is almost always the correct approach

// =======================================================================================
// duplicate / unique → Set
// count / frequency / lookup → Map
// fixed properties / config → Object


// ========================================================================================
// | Problem                  | Best Choice |
// | ------------------------ | ----------- |
// | Two Sum                  | Map         |
// | Frequency count          | Map         |
// | First non-repeating char | Map         |
// | Anagram check            | Map         |
// | Subarray sum             | Map         |
// | Caching                  | Map         |



//Object
// let user1 = {
//   name: "Amit",
//   address: { city: "Delhi" }
// };
// let user2 = user1 ;
// user2.address.city = "Noida";
// console.log(user1.address.city);//Noida

// expalination:
//   (1) Case: let user2 = user1
    // let user1 = { name: "Amit", address: { city: "Delhi" } };
    // let user2 = user1; 

    // Memory model
    //             Memory:
    //             📦 Object at 1001 → { name: "Amit", address: 3001 }
    //             📦 Object at 3001 → { city: "Delhi" }

    //             Pointers:
    //             user1 → 1001
    //             user2 → 1001 ← both point to the same object
    //             When you run:
    //             user2.address.city = "Noida"; 
                    // You update the object at address 3001. Since both variables reference the same place, 
                    // you see the change through both.
    // result: console.log(user1.address.city); // "Noida"


//   (2) Case: let user2 = { ...user1 };
    let user1 = { name: "Amit", address: { city: "Delhi" } };   
    let user2 = { ...user1 }; // Shallow copy
    user2.address.city = "Noida";
    console.log(user1.address.city); // "Noida"
    // Memory model
    //             📦 Object at 1001 → { name: "Amit", address: 3001 }
    //             📦 Object at 2001 → { name: "Amit", address: 3001 } (new object)
    //             📦 Object at 3001 → { city: "Delhi" 
    //             Pointers:
    //             user1 → 1001
    //             user2 → 2001
    //             Both user1 and user2 have their own objects (1001 and 2001), but the address property in both points to the same nested object at 3001.
    //             When you run:
    //             user2.address.city = "Noida";
                    // You update the object at address 3001. Since user1.address also points to this same object, you see the change through both.
    // result: console.log(user1.address.city); // "Noida"  
    // To avoid this, a deep copy is needed:
    // let user3 = JSON.parse(JSON.stringify(user1)); // Deep copy
    // user3.address.city = "Mumbai";
    
    // console.log(user1.address.city); // "Noida"
    
    // console.log(user3.address.city); // "Mumbai"


let a = { x: 1 };
let b = { x: 1 };

console.log(a == b);   // false
console.log(a === b);  // false
// Explanation:
// In JavaScript, objects are compared by reference, not by their content. 
// Even though both a and b have the same structure and values, they are two distinct objects in memory. 
// Therefore, both a == b and a === b evaluate to false because they do not reference the same object.

// Memroy Model:
//             📦 Object at 1001 → { x: 1 }
//             📦 Object at 2001 → { x: 1 }
//             Pointers:
//             a → 1001
//             b → 2001

// =================================================================
// delete vs undefined
// let obj = { name: "Amit" };

// obj.name = undefined;
        // Explanation:
            // Property still exists
            // Value is undefined
// console.log(obj); // { name: undefined }

// delete obj.name;
// console.log(obj); // {}


// Interview Point
// undefined → property exists
// delete → property removed


// =============================================================
// 1  (1) Deep Copy Using Recursion (Advanced Interview)
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }

  return copy;
}
// Example usage:
let original = {
  name: "Amit",
  address: { city: "Delhi", coordinates: { lat: 28.6139, long: 77.209 } }
};  
let copied = deepCopy(original);
copied.address.city = "Noida";
console.log(original.address.city); // "Delhi"
console.log(copied.address.city);   // "Noida"
// Explanation:
// The deepCopy function recursively copies all nested objects and arrays, ensuring that changes to the copied object do not affect the original.
    
        