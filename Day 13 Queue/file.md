1. What is a Queue?
      A Queue is a linear data structure that follows:

      FIFO – First In, First Out
===> The element that enters first is removed first.

Real-life example
A line at a bank counter:
      First person in line → served first
      New people join at the end

======================================================================================================
Core Operations:
| Operation          | Meaning                                     |
| ------------------ | ------------------------------------------- |
| **enqueue(x)**     | Add an element to the **back** of the queue |
| **dequeue()**      | Remove an element from the **front**        |
| **front / peek()** | View the front element without removing     |
| **isEmpty()**      | Check whether the queue has no elements     |
========================================================================================================

Visual Example:
              Start with an empty queue:
                                      [  ]

              Enqueue 10, 20, 30:
                              Front → [10, 20, 30] ← Back

              Dequeue:
                     Front → [20, 30] ← Back
==========================================================================================================
enqueue(10);
enqueue(20);
enqueue(30);

Front → [10, 20, 30] ← Rear

dequeue()

Front → [20, 30] ← Rear

===========================================================================================================
Where queues are used:
              Queues are widely used in systems where order matters, such as:
              Task scheduling (CPU job scheduling)
              Printing systems (print jobs go in order)
              Handling requests in servers
              Breadth-first search (BFS) in algorithms
              Messaging systems / event queues
              Async programming and buffering (network packets, IO)

============================================================================================================
Variants of Queues:

1. Simple Queue (Normal Queue)
    Insert at rear
    Remove from front

2. Circular Queue:
    Last position connects back to first
    Used to save memory

3. Priority Queue:
    Element with highest priority is removed first
    FIFO is not followed strictly

4. Deque (Double-Ended Queue):
    Insert and delete from both ends
==============================================================================================================
Time Complexity:
          Enqueue: O(1)
          Dequeue: O(1)



===============================================================================================================
Push vs Pop:
-------------
1. push() → Add at END:

                        let arr = [10, 20];
                        arr.push(30);
                        console.log(arr); //[10, 20, 30]

Used In:
            ====> Stack (push)
            ====> Queue (enqueue)
-----------------------------------------------------------------
2. pop() → Remove from END:

                        let arr = [10, 20, 30];
                        arr.pop();
                        console.log(arr); // [10, 20]
Used In:
            ====> Stack (pop)
            ====> Undo operations

======================================================================================================================
unshift() vs shift():
-------------
1.unshift() → Add at START

                        let arr = [20, 30];
                        arr.unshift(10);
                        console.log(arr); //[10, 20, 30]

Important Note:

            ====>This is slow (O(n))
            ====>All elements shift right

This is slow (O(n))
-----------------------------------------------------------------------
2. shift() → Remove from START:

                        let arr = [10, 20, 30];
                        arr.shift()
                        console.log(arr); // [20,30]
Used In:
            ====> Queue (dequeue)

Important Note:
            =====>This is slow (O(n))
            =====>All elements shift left

==========================================================================
Visual Summary:
            [10, 20, 30]
            push(40)     → [10, 20, 30, 40]
            pop()        → [10, 20, 30]
            shift()      → [20, 30]
            unshift(5)   → [5, 10, 20, 30]

Performance (Interview Important):

            | Method  | Operation    | Time |
            | ------- | ------------ | ---- |
            | push    | add end      | O(1) |
            | pop     | remove end   | O(1) |
            | shift   | remove start | O(n) |
            | unshift | add start    | O(n) |

Relation to Data Structures:

            | Data Structure | Methods Used              |
            | -------------- | ------------------------- |
            | Stack          | push + pop                |
            | Queue          | push + shift              |
            | Deque          | push, pop, shift, unshift |




