// enqueue(A,3)
// enqueue(B,1)
// enqueue(C,2)

// and dequeue()

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(value, priority) {
    this.items.push({ value, priority });
    //sort high to low
    this.items.sort((a, b) => b.priority - a.priority);
  }

  dequeue() {
    return this.items.shift();
  }
}

const pq = new PriorityQueue();
pq.enqueue("A", 3);
pq.enqueue("B", 1);
pq.enqueue("C", 2);
console.log(pq.items); //[ { value: 'A', priority: 3 },{ value: 'C', priority: 2 },{ value: 'B', priority: 1 }]
console.log(pq.dequeue()); // { value: 'A', priority: 3 }
console.log(pq.items); //[ { value: 'C', priority: 2 }, { value: 'B', priority: 1 } ]
