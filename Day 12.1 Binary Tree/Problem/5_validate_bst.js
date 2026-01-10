// Validate Binary Search Tree (BST) ==>(impt problem ****)

// What Is a Binary Search Tree (BST)?

// A tree is a BST if for every node:
//         All values in the left subtree are less than the node’s value
//         All values in the right subtree are greater than the node’s value


//     10
//    /  \
//   5    20
//  / \     \
// 3   7     30


function isBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.value <= min || root.value >= max) return false;
  return (
    isBST(root.left, min, root.value) &&
    isBST(root.right, root.value, max)
  );
}

isBST(root); // true
