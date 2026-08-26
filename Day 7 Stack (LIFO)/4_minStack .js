// push(3), push(5), push(2)
// getMin() => 2

class Stack {
  constructor() {
    this.items = [];
  }

  push(x) {
    this.items.push(x);
  }

  pop() {
    return this.items.pop();
  }

  getMin() {
    return Math.min(...this.items);
  }
}

const stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(2);

console.log(stack.getMin()); // 2