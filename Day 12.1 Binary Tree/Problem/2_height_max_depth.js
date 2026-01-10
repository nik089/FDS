    //     10
    //    /  \
    //   5    20
    //  / \     \
    // 3   7     30

   //  Find Height / Max Depth of Tree (most imp ****)

   function maxHeight(root){
      if(!root) return;
      return 1 + Math.max(maxHeight(root.left), maxHeight(root.right))
   } 


   //Step-by-Step Execution
   // Leaf Nodes:
               // height(3)  = 1
               // height(7)  = 1
               // height(30) = 1

         // Node 5:
         //       height(5):
         //             = 1 + max(height(3), height(7))
         //             = 1 + max(1, 1)
         //             = 2

         // Node 20:
         //       height(20)
         //       = 1 + max(0, height(30))
         //       = 1 + 1
         //       = 2
         
         // Node 10:
         //      height(10)
         //             = 1 + max(height(5), height(20))
         //             = 1 + max(2, 2)
         //             = 3

         // Final Answer:
         //            height(root) = 3



