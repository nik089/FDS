// Level Order Traversal (BFS)

    //     10
    //    /  \
    //   5    20
    //  / \     \
    // 3   7     30

// level=> 10,5,20,3,7,30

function levelOrder(root){
    let queue = [root];
    while(queue.length){
        let node = queue.shift();
        console.log(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right)
    }
}

// Use Index Pointer Instead of shift()
function levelOrder(root) {
  if (!root) return;
  let queue = [root];
  let i = 0;
  while (i < queue.length) {
    let node = queue[i++];   // no shifting
    console.log(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

// Optimized Approach (NO Shifting, NO Re-indexing)

// Using Index Pointer:
                        let queue = [10, 5, 20, 3];
                        let i = 0;
                        let node = queue[i++]; // read only

                        // What happens internally:
                        //             No elements are removed
                        //             No indexes are changed
                        //             We only move the pointer i
// ============================================================================
                        // Memory:
                        //        queue = [10, 5, 20, 3]
                        //           ↑
                        //           i moves forward

// ================================================================================

// Why This Is Better:
//         No element shifting
//         O(n) time
//         Common interview optimization


// | Queue (BFS)              | Stack (DFS)            |
// | ------------------------ | ---------------------- |
// | FIFO                     | LIFO                   |
// | Level order              | Depth order            |
// | Uses array / linked list | Uses recursion / stack |

// ==============================================================

// | Method        | Operation Cost | Total Time |
// | ------------- | -------------- | ---------- |
// | `shift()`     | O(n)           | O(n²)      |
// | Index pointer | O(1)           | O(n)       |

