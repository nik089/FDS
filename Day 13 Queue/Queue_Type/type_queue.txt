Variants of Queues — Explained Clearly:
=================================================

1. Simple Queue (Normal Queue):
  A Simple Queue follows FIFO: First In → First Out:

Operations:
        Insert at rear
        Remove from front

Visual:

      enqueue(10) → [10]
      enqueue(20) → [10, 20]
      enqueue(30) → [10, 20, 30]
      dequeue() → removes 10 → [20, 30]

JavaScript Example:

       class Queue {
        constructor() {
          this.items = [];
        }

        enqueue(x) {
          this.items.push(x);
        }

        dequeue() {
          return this.items.shift();
        }
     }

Real-World Example:

        Ticket booking line
        Printer job queue
        Call center waiting list

============================================================================================================
2. Circular Queue:

A Circular Queue is a queue in which the last position is connected back to the first position,
forming a circle.

----------------------------------------------or-------------------------------------------------------

A Circular Queue is a queue where the last position connects to the first to efficiently reuse memory and
avoid space wastage.

====> [ _, _, 30, 40 ]
====> Last position connects back to first

Why Circular Queue is Needed:
  Problem with Simple Queue:

    Consider a queue of size 5:

                  Index:  0   1   2   3   4
                  Queue: [10][20][30][40][50]

    After removing two elements:

                  Queue: [ ][ ][30][40][50]
                  Front = 2, Rear = 4

==> Even though there is space at index 0 and 1, you cannot insert new elements in a normal queue.
==> This causes memory wastage.


Solution: Circular Queue:
  In a Circular Queue:
          ===>Rear moves back to the beginning
          ===>Queue behaves like a circle
          ===>Empty spaces are reused

              rear = (rear + 1) % size

Visual Representation:

                      [10]
                [50]      [20]
                      [40]
                          [30]

Logical view (array):
                  Index:  0   1   2   3   4
                  Queue: [ ][ ][30][40][50]
                          ↑          ↓
                        front      rear

                  Insert happens at index 0 next.

Simple JavaScript Implementation:
                            class CircularQueue {
                              constructor(size) {
                                this.queue = new Array(size);
                                this.size = size;
                                this.front = -1;
                                this.rear = -1;
                              }

                              enqueue(value) {
                                if ((this.rear + 1) % this.size === this.front) {
                                  console.log("Queue is Full");
                                  return;
                                }

                                if (this.front === -1) this.front = 0;

                                this.rear = (this.rear + 1) % this.size;
                                this.queue[this.rear] = value;
                              }

                              dequeue() {
                                if (this.front === -1) {
                                  console.log("Queue is Empty");
                                  return;
                                }

                                const value = this.queue[this.front];

                                if (this.front === this.rear) {
                                  this.front = this.rear = -1;
                                } else {
                                  this.front = (this.front + 1) % this.size;
                                }

                                return value;
                              }
                            }
Important Conditions:
Queue is Full:
            (front == (rear + 1) % size)

Queue is Empty:
            front == -1
============================================================================================================
3. Priority Queue:

Definition:
Each element has a priority.
                  ==> Higher priority element is removed first
                  ==> FIFO is followed only if priorities are equal

Visual:
                  Task      Priority
                    A           3
                    B           1
                    C           2

Removal Order:   A → C → B

JavaScript Example (Simple):

                      class PriorityQueue {
                        constructor() {
                          this.items = [];
                        }

                        enqueue(value, priority) {
                          this.items.push({ value, priority });
                          this.items.sort((a, b) => b.priority - a.priority);
                        }

                        dequeue() {
                          return this.items.shift();
                        }
                      }

Real-World Example:
                CPU task scheduling
                Emergency room patients
                Dijkstra’s algorithm

If priorities are equal:

                  pq.enqueue("X", 2);
                  pq.enqueue("Y", 2);
                              ====>  X is removed before Y (becoz of fifo)

============================================================================================================
4. Deque (Double-Ended Queue):

Definition
Deque allows:
          Insert from front and rear
          Remove from front and rear

Operations:
        | Operation   | Meaning           |
        | ----------- | ----------------- |
        | addFront    | Insert at front   |
        | addRear     | Insert at rear    |
        | removeFront | Remove from front |
        | removeRear  | Remove from rear  |

Visual:
        addRear(10) → [10]
        addRear(20) → [10, 20]
        addFront(5) → [5, 10, 20]

        removeRear() → removes 20 → [5, 10]
        removeFront() → removes 5 → [10]


JavaScript Example:

              class Deque {
                constructor() {
                  this.items = [];
                }

                addFront(x) {
                  this.items.unshift(x);
                }

                addRear(x) {
                  this.items.push(x);
                }

                removeFront() {
                  return this.items.shift();
                }

                removeRear() {
                  return this.items.pop();
                }
              }

Real-World Example:
                  Undo / Redo functionality
                  Sliding Window problems
                  Browser history navigation


===============================================================================================
Interview Comparison Table:

| Type           | Insert            | Remove           | FIFO     | Special            |
| -------------- | ----------------- | ---------------- | -------- | ------------------ |
| Simple Queue   | Rear              | Front            | Yes      | Basic              |
| Circular Queue | Rear              | Front            | Yes      | Memory efficient   |
| Priority Queue | Based on priority | Highest priority | No       | Used in scheduling |
| Deque          | Both ends         | Both ends        | Optional | Very flexible      |

===============================================================================================
Deque can behave like both Stack and Queue:
                                        Stack → use one end
                                        Queue → use both ends