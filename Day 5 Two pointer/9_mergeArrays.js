[1, 3, 5], [2, 4, 6] = input
[1, 2, 3, 4, 5, 6] = output

function mergeArrays(a, b) {
  let i = 0, j = 0, result = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) result.push(a[i++]);
    else result.push(b[j++]);
  }
  return result.concat(a.slice(i), b.slice(j));
}


// or same code break
function mergeArrays(a, b) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < a.length && j < b.length) {

    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i++;
  }

  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); 
