class Node{
    constructor(value){
        this.data =  value;
        this.next = null
    }
}

// /==================================================================
// 1. INSERT Operation (Singly Linked List)

// Case 1: Insert at the Beginning (Head):

// Before:
//         Head → A → B → C → null

//         Insert X at head

// After:
//        Head → X → A → B → C → null

// What Happens (Conceptually):
//                         Create a new node X
//                         Point X.next to the current head
//                         Move head to X

function insertHead(head, value){
    const node = {data : value, next:head}
    return node
}
// Time Complexity: O(1)

// head
//  ↓
// 10 → 20 → 30 → null

// head = insertHead(head, 5);
// Step 1: Create New Node:
//                         node = { data: 5, next: head }

// Step 2: Link New Node to Old Head:
//                                     5 → 10 → 20 → 30 → null
                    
// Step 3: Return New Head:
//                         return node;
//                         Now head points to 5.



// head
//  ↓
// 5 → 10 → 20 → 30 → null

//=======================================================================
// Case 2: Insert at the End (Tail):

// Before:
//         Head → A → B → C → null

//         Insert X at tail

// After:
//        Head  → A → B → C → X → null


function insertAtEnd(head, value) {
  if (!head) {
    return { data: value, next: null };
  }

  let curr = head;
  while (curr.next) {
    curr = curr.next;
  }

  curr.next = { data: value, next: null };
  return head;
}

// Traversal Process (Graph View):
//                         Step 1: Start at Head:
//                                             curr → 10 → 20 → 30 → null 

//                         Step 2: Move Forward:
//                                             10 → curr → 20 → 30 → null

//                                             10 → 20 → curr → 30 → null

//                         Step 3: Reach Last Node:
//                                             10 → 20 → 30 → curr → null

//                         Insert New Node at End:
//                                             curr.next = { data: 40, next: null };

//                         head
//                         ↓
//                         10 → 20 → 30 → 40 → null

//                         Edge Case:
//                                     If head === null:
//                                                 This code will throw an error because:
//                                                 let curr = head; // null
//                                                 curr.next // Cannot read property 'next' of null

// Step-by-Step Traversal:

// Step 1: curr = head;
//        curr → 10 → 20 → 30 → null
//        curr.next points to 20

// Step 2: curr = curr.next;
//        10 → curr → 20 → 30 → null
//        curr.next points to 30

// Step 3: curr = head;
//       10 → 20 → curr → 30 → null
//       Now curr.next is null
//       This means we reached the last node

// Understanding the while (curr.next) Line:

//                         while (curr.next) {
//                         curr = curr.next;
//                         }

// “Keep moving forward as long as there is a next node:

//                         If curr.next exists → move forward
//                         If curr.next === null → stop


// // memory view
// head = {
//   data: 10,
//   next: {
//     data: 20,
//     next: {
//       data: 30,
//       next: null
//     }
//   }
// }

//===========================================================================
// 3. DELETE Operation
        // Case 1: Delete Head Node:
                // Before:
                //         Head → A → B → C → null

                // Delete A
                // After:
                //         Head → B → C → null

                function deleteHead(head){
                    return head.next
                }
                // Time Complexity: O(1)
//----------------------------------------------------------------------------------
            // Case 2: Delete a Middle Node

                // Before: Head → A → B → C → D → null
                // Delete C: 
                // After:   Head → A → B → D → null

                function deleteValue(head, value) {
                let curr = head;
                while (curr.next && curr.next.data !== value) {
                    curr = curr.next;
                }
                if (curr.next) {
                    curr.next = curr.next.next;
                }
                return head;
                }

// Example Linked List:
//                     head
//                     ↓
//                     10 → 20 → 30 → 40 → null

                    // Delete Value = 30:
                    //                 deleteValue(head, 30);

// Step-by-Step Execution:

//     Step 1: Start from Head:
//                 let curr = head;
//                 curr → 10 → 20 → 30 → 40 → null
    

//     Step 2: while Condition Explained:

//            while (curr.next && curr.next.data !== value)
             // first check
                // curr.next.data = 20 ≠ 30
                // Move forward
                // 10 → curr → 20 → 30 → 40 → null

            //Second Check
              //curr.next.data = 30 (true)
              //Stop loop
            //   curr → 20 → 30 → 40 → null

    // Step 3: Delete the Node 
          //curr.next = curr.next.next;  //“Skip the node with value 30 and connect 20 directly to 40.”
    
    //Before Deletion: 20 → 30 → 40
    
    //After Deletion : 20 → 40
    
    //Final Linked List: 10 → 20 → 40 → null
// =========================================================================================================



// 3. REVERSE Operation (MOST IMPORTANT):

// Original List : Head → A → B → C → null

// Step-by-Step Graph (Pointer Changes):
//                                 Step 1:  null ← A   B → C → null

//                                 Step 2: null ← A ← B   C → null

//                                 Step 3 : null ← A ← B ← C

//                                 Final Result : Head → C → B → A → null



function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next; // save next
    curr.next = prev;     // reverse pointer
    prev = curr;          // move prev
    curr = next;          // move curr
  }
  return prev;
}

// Initial State:
// prev → null
// curr → 10 → 20 → 30 → 40 → null

// Iteration 1:
// next = curr.next;   // 20
// curr.next = prev;  // 10 → null
// prev = curr;       // prev → 10
// curr = next;       // curr → 20

// null ← 10    20 → 30 → 40 → null
//         ↑
//       prev   curr


// Iteration 2:
// next = curr.next;   // 30
// curr.next = prev;  // 20 → 10
// prev = curr;       // prev → 20
// curr = next;       // curr → 30


// null ← 10 ← 20    30 → 40 → null
//                ↑
//              prev   curr



// Iteration 3:

// next = curr.next;   // 40
// curr.next = prev;  // 30 → 20
// prev = curr;       // prev → 30
// curr = next;       // curr → 40

// null ← 10 ← 20 ← 30    40 → null
//                       ↑
//                     prev   curr


// Iteration 4:
// next = curr.next;   // null
// curr.next = prev;  // 40 → 30
// prev = curr;       // prev → 40
// curr = next;       // curr → null

// null ← 10 ← 20 ← 30 ← 40
//                         ↑
//                       prev

// final:
// head
//  ↓
// 40 → 30 → 20 → 10 → null


//Loop Ends:
// curr === null → stop
// prev is the new head


// ======================================================================
// | Operation     | Pointer Change   | Time |
// | ------------- | ---------------- | ---- |
// | Insert Head   | New → Head       | O(1) |
// | Insert Tail   | Last → New       | O(n) |
// | Delete Head   | Head → Next      | O(1) |
// | Delete Middle | Prev → Next      | O(n) |
// | Reverse       | Direction change | O(n) |
