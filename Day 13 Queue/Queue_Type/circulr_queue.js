class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    // Check full
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Queue is Full");
      return;
    }

    // First element
    if (this.front === -1) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
  }

  dequeue() {
    if (this.front === -1) {
      console.log("Queue is Empty");
      return;
    }

    let removed = this.queue[this.front];

    // Only one element
    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return removed;
  }

  peek() {
    return this.front === -1 ? null : this.queue[this.front];
  }
}

//Initial State
// | Step | Operation  | Queue Array             | front | rear | Explanation    |
// | ---- | ---------- | ----------------------- | ----- | ---- | -------------- |
// | 0    | Initialize | `[ _ , _ , _ , _ , _ ]` | -1    | -1   | Queue is empty |

//Enqueue Operations
// | Step | Operation   | Queue Array            | front | rear | Explanation                     |
// | ---- | ----------- | ---------------------- | ----- | ---- | ------------------------------- |
// | 1    | enqueue(10) | `[10, _ , _ , _ , _]`  | 0     | 0    | First element sets front & rear |
// | 2    | enqueue(20) | `[10, 20, _ , _ , _]`  | 0     | 1    | Rear moves forward              |
// | 3    | enqueue(30) | `[10, 20, 30, _ , _]`  | 0     | 2    | Normal insertion                |
// | 4    | enqueue(40) | `[10, 20, 30, 40, _]`  | 0     | 3    | Normal insertion                |
// | 5    | enqueue(50) | `[10, 20, 30, 40, 50]` | 0     | 4    | Queue becomes full              |

//Queue Full Case
// | Step | Operation   | Queue Array            | front | rear | Explanation                   |
// | ---- | ----------- | ---------------------- | ----- | ---- | ----------------------------- |
// | 6    | enqueue(60) | `[10, 20, 30, 40, 50]` | 0     | 4    | `(rear+1)%5 === front` → FULL |

//Dequeue Operations
// | Step | Operation      | Queue Array             | front | rear | Explanation         |
// | ---- | -------------- | ----------------------- | ----- | ---- | ------------------- |
// | 7    | dequeue() → 10 | `[ _ , 20, 30, 40, 50]` | 1     | 4    | Front moves forward |
// | 8    | dequeue() → 20 | `[ _ , _ , 30, 40, 50]` | 2     | 4    | FIFO preserved      |

// Wrap Around Enqueue
// | Step | Operation   | Queue Array            | front | rear | Explanation             |
// | ---- | ----------- | ---------------------- | ----- | ---- | ----------------------- |
// | 9    | enqueue(60) | `[60, _ , 30, 40, 50]` | 2     | 0    | Rear wraps using modulo |
// | 10   | enqueue(70) | `[60, 70, 30, 40, 50]` | 2     | 1    | Wrap continues          |

// imp point
// front = -1 → empty queue
// (rear + 1) % size === front → full queue
