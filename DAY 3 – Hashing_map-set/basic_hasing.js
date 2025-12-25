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
// ❌ Keys only strings
// ❌ Prototype issues
// ❌ Less predictable
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
// | Duplicate keys   | ❌         | ❌           | ❌         |
// | Key types        | Any       | Value only  | String    |
// | Lookup time      | O(1)      | O(1)        | O(1)      |
// | Interview choice | ⭐⭐⭐       | ⭐⭐          | ⭐         |


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
// 👉 Hashing is almost always the correct approach

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
