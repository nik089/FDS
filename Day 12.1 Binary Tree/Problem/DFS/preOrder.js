    //     10
    //    /  \
    //   5    20
    //  / \     \
    // 3   7     30

// Rule: Root → Left → Right

function preOrder(root){
    if(!root) return;
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right)
}

// 10,5,3,7,20,30


