function removeDuplicates(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.slice(0, i + 1);
}

[1, 1, 2, 2, 3]; //[1,2,3]

// | Step | i | j | arr[i] | arr[j] | Equal? | Action                | Array state   |
// | ---- | - | - | ------ | ------ | ------ | --------------------- | ------------- |
// | 1    | 0 | 1 | 1      | 1      | Yes    | do nothing            | `[1,1,2,2,3]` |
// | 2    | 0 | 2 | 1      | 2      | No     | `i=1`, set `arr[1]=2` | `[1,2,2,2,3]` |
// | 3    | 1 | 3 | 2      | 2      | Yes    | do nothing            | `[1,2,2,2,3]` |
// | 4    | 1 | 4 | 2      | 3      | No     | `i=2`, set `arr[2]=3` | `[1,2,3,2,3]` |
