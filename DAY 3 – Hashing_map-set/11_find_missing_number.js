function missingNumber(arr) {
    const nweSet = new Set(arr);
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
        if (!nweSet.has(i)) {
            result.push(i)
        }
    }
    return result;

}
let arr = [2, 3, 4, 7, 9]
console.log(missingNumber(arr));// Output: [0,1,5,6,8]