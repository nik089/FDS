function isPalindrome(str) {
  let queue = [];
  let stack = [];

  for (let ch of str) {
    queue.push(ch);
    stack.push(ch);
  }

  while (queue.length) {
    if (queue.shift() !== stack.pop()) return false;
  }
  return true;
}

// "level" → true
