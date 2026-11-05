// let arr = [0,1,0,3,12]
//
function moveZeroes(arr) {
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  return arr;
}

// | Step  | j | arr[j] | i (next non-zero index) | Condition (`arr[j] !== 0`) | Swap performed       | Array after step                |
// | ----- | - | ------ | ----------------------- | -------------------------- | -------------------- | ------------------------------- |
// | Start | — | —      | 0                       | —                          | —                    | `[0, 1, 0, 3, 12]`              |
// | 1     | 0 | 0      | 0                       | false                      | none                 | `[0, 1, 0, 3, 12]`              |
// | 2     | 1 | 1      | 0                       | true                       | swap arr[0] ↔ arr[1] | `[1, 0, 0, 3, 12]` → then `i=1` |
// | 3     | 2 | 0      | 1                       | false                      | none                 | `[1, 0, 0, 3, 12]`              |
// | 4     | 3 | 3      | 1                       | true                       | swap arr[1] ↔ arr[3] | `[1, 3, 0, 0, 12]` → then `i=2` |
// | 5     | 4 | 12     | 2                       | true                       | swap arr[2] ↔ arr[4] | `[1, 3, 12, 0, 0]` → then `i=3` |
