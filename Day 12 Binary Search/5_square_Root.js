function mySqrt(x) {
  let left = 0, right = x, ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid <= x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

console.log(mySqrt(10)); // 3
console.log(mySqrt(16)); // 4

// So we DO NOT STOP.
// We move right to check larger numbers.

// | Step | left | right | mid | mid² | ≤ 10? | ans | Action    |
// | ---: | ---: | ----: | --: | ---: | ----- | --: | --------- |
// |    1 |    0 |    10 |   5 |   25 |  (X)    |   0 | right = 4 |
// |    2 |    0 |     4 |   2 |    4 | ✔     |   2 | left = 3  |
// |    3 |    3 |     4 |   3 |    9 | ✔     |   3 | left = 4  |
// |    4 |    4 |     4 |   4 |   16 |  (X)    |   3 | right = 3 |


