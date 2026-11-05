function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;

}

let arr = [1, 2, 3, 4, 5, 1];
console.log(hasDuplicate(arr)); // true

// 

function hasDuplicate(arr) {
    const newSet = new Set();
    for (let num of arr) {
        if (newSet.has(num)) {
            return true

        }
        newSet.set(num);
    }
    return false;
}