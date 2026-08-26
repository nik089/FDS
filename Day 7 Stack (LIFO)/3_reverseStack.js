function reverseStack(stack) {
  let temp = [];

  while (stack.length) {
    temp.push(stack.pop());
  }

  return temp;
}

console.log(reverseStack([1, 2, 3, 4]));//[4, 3, 2, 1]