function reverseQueue(queue) {
  let stack = [];

  while (queue.length) {
    stack.push(queue.shift());
  }

  while (stack.length) {
    queue.push(stack.pop());
  }

  return queue;
}


let queue = [1,2,3];
console.log(reveserQueue(queue)) // [3,2,1]

eg:[1,2,3] =[3,2,1]