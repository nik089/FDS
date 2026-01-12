// enqueue(10) → [10]
// enqueue(20) → [10, 20]
// enqueue(30) → [10, 20, 30]
// dequeue() → removes 10 → [20, 30]

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    this.items.push(x);
  }

  dequeue() {
    return this.items.length ? this.items.shift() : null;

  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(10);
queue.enqueue(10);
queue.dequeue();

console.log(queue.items, " this.items"); // [20, 30]
