// Example:
// [2,7,11,15], target = 9 → [0,1]


function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i,j]
            }
        }

    }
}

let arr = [2, 7, 11, 15];
target = 9;
console.log(twoSum(arr, target)) // [0,1]


// Time: O(n²) two loop ==> n*n ====> (n²)
// Space: O(1)