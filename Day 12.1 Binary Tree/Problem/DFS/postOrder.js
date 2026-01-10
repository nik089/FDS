    //     10
    //    /  \
    //   5    20
    //  / \     \
    // 3   7     30

// Rule: Left → Right → Root

function postOrder(root){
    if(!root) return;
    preOrder(root.left);
    preOrder(root.right)
    console.log(root.value);
}

// 3,7,5,30,20,10

