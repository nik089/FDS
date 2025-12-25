function intersect(arr1, arr2){
    const map = new Map();
    const result = [];
    for(let x of arr1){
        map.set(x, (map.get(x) || 0) + 1);
    }

    for(let y of arr2){
        if(map.get(y) > 0){
            result.push(y);
            map.set(y, map.get(y) - 1);
        }
    }

    return result;

} 

let arr1 = [1,2,2,3];
let arr2 = [2,2];
console.log(intersect(arr1, arr2)); // [2,2]

// Explanation Table
// | arr1 Element | map before        | Action                      | map after         |
// | -------------| ----------------- | --------------------------- | ------------------|

// | 1            | `{}`              | map.set(1, 1)               | `{1 → 1}`         |   
// | 2            | `{1 → 1}`         | map.set(2, 1)               | `{1 → 1, 2 → 1}`  |   

// | 2            | `{1 → 1, 2 → 1}`  | map.set(2, 2)               | `{1 → 1, 2 → 2}`  |   

// | 3            | `{1 → 1, 2 → 2}`  | map.set(3, 1)               | `{1 → 1, 2 → 2, 3 → 1}` |
    


// | arr2 Element | map before        | Action                      | map after         |
// | -------------| ----------------- | --------------------------- | ------------------|   
// | 2            | `{1 → 1, 2 → 2, 3 → 1}` | result.push(2), map.set(2, 1) | `{1 → 1, 2 → 1, 3 → 1}` |
// | 2            | `{1 → 1, 2 → 1, 3 → 1}` | result.push(2), map.set(2, 0) | `{1 → 1, 2 → 0, 3 → 1}` |
// Visual Memory View
// Initial: map = {}
// After processing arr1: map = {1 → 1, 2 → 2, 3 → 1}
// After processing arr2: result = [2, 2], map = {1 → 1, 2 → 0, 3 → 1}
// Time Complexity: O(n + m) - where n and m are the lengths of arr1 and arr2 respectively
// Space Complexity: O(min(n, m)) - storing counts for the smaller array in the map