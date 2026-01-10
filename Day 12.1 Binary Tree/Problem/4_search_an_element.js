// Search an Element in Binary Tree


    //     10
    //    /  \
    //   5    20
    //  / \     \
    // 3   7     30

function search(root, target){
    if(!root) return
    if(root.value === target ) return true;
    return search(root.left , target) || search(root.right , target)
}

search(root, 7); // true