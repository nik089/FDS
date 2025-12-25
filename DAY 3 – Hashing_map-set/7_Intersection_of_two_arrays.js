function interection(arr1, arr2){
    const map = new Map();
    let result=[];
    for(let x of arr1){
        map.set(x, (map.get(x) ?? 0) + 1)
    }

    for(let y of arr2){
        if(map.get(y) > 0 ){
            result.push(y);
            map.set(y, (map.get(y)-1))
        }
    }
    return result;
}

let arr1 = [100,200, 200, 300,400];
let arr2 = [1,2,200,300,4,6];
console.log(interection(arr1, arr2)); // [200,300]

// Time Complexity: O(n + m) where n and m are the lengths of arr1 and arr2 respectively
// Space Complexity: O(min(n, m)) for storing the elements of the smaller array in the map

//
// Explanation:
// 1. We create a map to store the frequency of each element in arr1.
// 2. We then iterate through arr2 and check if each element exists in the map with a count greater than 0.
// 3. If it does, we add it to the result array and decrement its count in the map to handle duplicates correctly.
// 4. Finally, we return the result array containing the intersection of the two arrays.


