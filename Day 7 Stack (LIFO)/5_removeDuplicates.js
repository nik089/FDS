function removeDuplicates(s) {
  let stack = [];

  for (let ch of s) {
    if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join('');
}

// "abbaca" ==>// "ca"
