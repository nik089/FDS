function countOccurrence(arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            count++;
        }
    }
    // return count; or
    return {[x]:count}
}

let arr = [1, 2, 1, 2, 1, 1, 1, 2, 3, 4, 55, 6, 7, 1, 1];
console.log(countOccurrence(arr, 1)); // 7 (i coming in 7 times)