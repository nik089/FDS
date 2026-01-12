// addRear(10) → [10]
// addRear(20) → [10, 20]
// addFront(5) → [5, 10, 20]

// removeRear() → removes 20 → [5, 10]
// removeFront() → removes 5 → [10]

// addRear(10) → [10]
// addRear(20) → [10, 20]
// addFront(5) → [5, 10, 20]

// removeRear() → removes 20 → [5, 10]
// removeFront() → removes 5 → [10]

class dQueue {
  constructor(value) {
    this.items = [];
  }

  addFront(value) {
    this.items.unshift(value);
  }
  addRear(value) {
    this.items.push(value);
  }
  removeFront() {
    this.items.shift();
  }
  removeRear() {
    this.items.pop();
  }
}

let dqueue = new dQueue();
dqueue.addRear(10);
dqueue.addRear(20);
dqueue.addFront(5);
dqueue.removeRear();
dqueue.removeFront();
console.log(dqueue.items);
