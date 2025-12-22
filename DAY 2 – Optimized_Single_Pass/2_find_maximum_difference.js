// use brute force
function maxDifference(){
  let maxDiff = -Infinity;
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      let diff = arr[j] - arr[i];
      maxDiff = Math.max(maxDiff, maxDiff, diff);
    }
    return maxDiff;
  }

}

console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // 8
console.log(maxDifference([7, 9, 5, 6, 3, 2]));



// method 2: Optimized single pass
function maxDifference(arr){{
  let min = arr[0];
  let maxDiff = arr[1]-arr[0];

  for(let i =1; i < arr.length; i++){
    let currentDiff = arr[i] - min;
    maxDiff = Math.max(maxDiff, currentDiff);
    min = Math.min(min, arr[i]);
  }
  return maxDiff;
}
}
console.log(maxDifference([7, 9, 5, 6, 3, 2])); // 2
console.log(maxDifference([2, 9, 1, 9, 6, 9, 8])); //  check table

// Why j > i is ALWAYS true here
// min is updated only from previous elements
// arr[j] is always compared with earlier values
// So index of min is always less than j


// | i    | arr[i] | min (before) | arr[i] - min | maxDiff | min (after) |
// | ---- | ------ | ------------ | ------------ | ------- | ----------- |
// | init | —      | 2            | —            | 7       | 2           |
// | 1    | 9      | 2            | 7            | 7       | 2           |
// | 2    | 1      | 2            | -1           | 7       | 1           |
// | 3    | 9      | 1            | 8            | 8       | 1           |
// | 4    | 6      | 1            | 5            | 8       | 1           |
// | 5    | 9      | 1            | 8            | 8       | 1           |
// | 6    | 8      | 1            | 7            | 8       | 1           |
