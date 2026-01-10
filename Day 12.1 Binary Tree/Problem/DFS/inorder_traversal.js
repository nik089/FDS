// Rule: Left → Root → Right

 function inoder(root){
    if(!root) return;
    inoder(root.left);
    console.log(root.value);
    inoder(root.right);
 }

    //     10
    //    /  \
    //   5    20
    //  / \     \
    // 3   7     30

// op==> 3,5,7,10,20,30
