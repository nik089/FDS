

function maxSubarraySum(arr, target){
    let maxSum = -Infinity;
    let sum = 0;
    for (let i=0; i <= arr.length -target; i++ ){
        for(let j=i; j< i+target; j++){
            sum += arr[j]
        }
        maxSum = Math.max(maxSum, sum)

    }
    return maxSum
}



let arr = [2, 1, 5, 1, 3, 2];
let target = 3;
console.log(maxSubarraySum(arr,target)) // 9




//return subarray
// function maxSubarraySumWithArray(arr, k) {
//   let maxSum = -Infinity;
//   let maxSubarray = [];

//   for (let i = 0; i <= arr.length - k; i++) {
//     let sum = 0;

//     for (let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }

//     if (sum > maxSum) {
//       maxSum = sum;
//       maxSubarray = arr.slice(i, i + k);
//     }
//   }

//   return { maxSum, subarray: maxSubarray };
// }


// | i | Subarray | sum | maxSum | maxSubarray |
// | - | -------- | --- | ------ | ----------- |
// | 0 | [2,1,5]  | 8   | 8      | [2,1,5]     |
// | 1 | [1,5,1]  | 7   | 8      | [2,1,5]     |
// | 2 | [5,1,3]  | 9   | 9      | [5,1,3]     |
// | 3 | [1,3,2]  | 6   | 9      | [5,1,3]     |

