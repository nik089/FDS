// problem-1
arr = [2, 4, 6, 3, 5]
queries = [
  (0, 2),
  (1, 4),
  (2, 3)
] //“What is the sum from index L to R?”

//   (1) Build Prefix Sum
// | i | arr[i] | prefix[i] |
// | - | ------ | --------- |
// | 0 | 2      | 2         |
// | 1 | 4      | 6         |
// | 2 | 6      | 12        |
// | 3 | 3      | 15        |
// | 4 | 5      | 20        | prefix = [2, 6, 12, 15, 20]




