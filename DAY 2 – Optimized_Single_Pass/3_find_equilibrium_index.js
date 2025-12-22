// What is an Equilibrium Index?

// Left side → numbers before you
// Right side → numbers after you

// arr = [1, 2, 0, 3]

// index:  0   1   2   3
// value:  1   2   0   3

// step1: Check index 0
// Left side → nothing
// Right side → 2 + 0 + 3 = 5

// 0 ≠ 5 ❌

// step2: Check index 1
// Left side → 1 = 1
// Right side → 0 + 3 = 3
// 1 ≠ 3 ❌

// step3: Check index 2
// Left side → 1 + 2 = 3
// Right side → 3 = 3
// 3 = 3 ✅

// Answer = 2   Equilibrium Index

// methoed 1: Brute Force
function findEquilibriumIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(findEquilibriumIndex([1, 2, 0, 3])); // 2
console.log(findEquilibriumIndex([3, 4, 8, -9, 20, 6])); // 3
console.log(findEquilibriumIndex([4, 2, 2]));

// ====================================================================

// method 2: Optimized Single Pass

function findEquilibriumIndex(arr) {
  // let totalSum = 0;
  // for(let i =0; i < arr.length; i++){
  //   totalSum += arr[i];
  // }  or

  let totalSum = arr.reduce((acc, val) => acc + val, 0);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i]; // now totalSum = right sum
    if (leftSum === totalSum) return i;
    leftSum += arr[i];
  }
  return -1;
}

console.log(findEquilibriumIndex([1, 2, 0, 3])); // 2
console.log(findEquilibriumIndex([3, 4, 8, -9, 20, 6]));
console.log(findEquilibriumIndex([4, 2, 2])); // 0



// | i | arr[i] | totalSum BEFORE | totalSum AFTER (rightSum) | leftSum | leftSum === rightSum |
// | - | ------ | --------------- | ------------------------- | ------- | -------------------- |
// | 0 | 1      | 6               | 5                         | 0       | ❌                    |
// | 1 | 2      | 5               | 3                         | 1       | ❌                    |
// | 2 | 0      | 3               | 3                         | 3       | ✅                    |



// What This Code Is Doing (Simple Words)
//   totalSum = sum of entire array
//   leftSum = sum of elements before current index
// At each index:
//   Remove current element from totalSum
//   Now totalSum becomes right side sum
//   Compare leftSum and rightSum
//   If equal → equilibrium index found
