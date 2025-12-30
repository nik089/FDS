function reverseStack(stack) {
  let temp = [];

  while (stack.length) {
    temp.push(stack.pop());
  }
  return temp;
}
