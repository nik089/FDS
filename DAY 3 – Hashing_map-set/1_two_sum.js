
function twoSum(arr, target) {
    const newMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const need = target - arr[i]; // calculate the needed complement
        if (newMap.has(need)) {
            return [newMap.get(need), i]
        }
        newMap.set(arr[i], i);
    }
}

let arr = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(arr, target)); // [0, 1]


// ============================================================
// Explanation Table

// | i | arr[i] | need = target - arr[i] | map before | map.has(need)? | Action          |
// | - | ------ | ---------------------- | ---------- | -------------- | --------------- |
// | 0 | 2      | 7                      | `{}`       |  (X)No           | map.set(2, 0)   |
// | 1 | 7      | 2                      | `{2 → 0}`  |   (✓)Yes          | return `[0, 1]` |


// Visual Memory View
// Initial: map = {}
// i = 0: map = {2 → 0}
// i = 1: need = 2 found in map, return [0, 1]  
// ============================================================
// Time Complexity: O(n) - Single pass through the array

// =============================================================


let arr1 = [2, 7, 11, 15];
let target1 = 17;
console.log(twoSum(arr1, target1)); // [0, 3]

// ============================================================
// Explanation Table
// | i | arr[i] | need = target - arr[i] | map before      | map.has(need)? | Action          |
// | - | ------ | ---------------------- | --------------- | -------------- | --------------- |
// | 0 | 2      | 15                     | `{}`            |  (X)No           | map.set(2, 0)   |
// | 1 | 7      | 10                     | `{2 → 0}`       |  (X)No           | map.set(7, 1)   |
// | 2 | 11     | 6                      | `{2 → 0, 7 → 1}`|  (X)No           | map.set(11, 2)  |
// | 3 | 15     | 2                      | `{2 → 0, 7 → 1, 11 → 2}`|   (✓)Yes    | return `[0, 3]` |


// Visual Memory View
// Initial: map = {}
// i = 0: map = {2 → 0}         

// i = 1: map = {2 → 0, 7 → 1}

// i = 2: map = {2 → 0, 7 → 1, 11 → 2}
// i = 3: need = 2 found in map, return [0, 3]
// ============================================================
// Time Complexity: O(n) - Single pass through the array

