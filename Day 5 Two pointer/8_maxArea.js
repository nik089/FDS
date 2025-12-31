//  Container With Most Water (ADVANCED)
// input= [1,8,6,2,5,4,8,3,7]
// output = 49

function maxArea(height) {
  let l = 0,
    r = height.length - 1;
  let max = 0;

  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) l++;
    else r--;
  }
  return max;
}
