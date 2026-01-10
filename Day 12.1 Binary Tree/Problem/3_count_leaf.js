    //     10
    //    /  \
    //   5    20
    //  / \     \
    // 3   7     30

    // Count Leaf Nodes

    function countLeaf(root){
        if(!root) return ;
        if(!root.left && !root.right) return 1;
        return countLeaf(root.left) + countLeaf(root.right);   
    } //3


    
   //Step-by-Step Execution
   // Leaf Nodes:
              countLeaf(3)  = 1
              countLeaf(7)  = 1
              countLeaf(30) = 1

         // Node 5:
         //       countLeaf(5):
         //             = countLeaf(3) + countLeaf(7)
         //             = 1 + 1
         //             = 2

         // Node 20:
         //       countLeaf(20)
         //      = countLeaf(null) + countLeaf(30)
         //      = 0 + 1
        //       = 1
         
         // Node 10:
         //      countLeaf(10)
         //             = countLeaf(5) + countLeaf(20)
         //             = 2 + 1
         //             = 3

         // Final Answer:
         //            countLeaf(root) === 3



// Call Stack Visualization:
                        // countLeaf(10)
                        // ├─ countLeaf(5)
                        // │   ├─ countLeaf(3) → 1
                        // │   └─ countLeaf(7) → 1
                        // └─ countLeaf(20)
                        //     └─ countLeaf(30) → 1
