// Find Lowest Common Ancestor (LCA) =====> most impt question

// An ancestor of a node is any node on the path from the root to that 
// node (excluding the node itself)


//     10
//    /  \
//   5    20
//  / \     \
// 3   7     30

// Path from root to 3: 10 → 5 → 3
// Ancestors are: 10, 5

// Path from root to 7: 10 → 5 → 7
// Ancestors are:10, 5



function BT_LCA(root, p, q) {
    if (!root) return null;
    if (root.value === p || root.value === q) return root;
    let left = BT_LCA(root.left, p, q);
    let right = BT_LCA(root.right, p, q);
    if (left && right) return root;
    return left ? left : right;
}

console.log(LCA(root, 3, 7).value); // 5

// How it works:
//             Searches both subtrees
//             Because no ordering rule
//             Finds p and q anywhere
//             First node where both sides return non-null → LCA
//      Why it must search both sides
//     Because in a normal BT, you cannot predict direction.

// ========================================================
// Key BST Rule:
        // If both values < root.value → go left
        // If both values > root.value → go right
        // Otherwise → root is the LCA


function LCA_BST(root, p, q) {
  if (!root) return null;
  if (p < root.value && q < root.value) {
    return LCA_BST(root.left, p, q);
  }
  if (p > root.value && q > root.value) {
    return LCA_BST(root.right, p, q);
  }
  return root; // split point
}

// How it works:
//             Uses BST rule:
//                 Left < Root < Right
//             Moves only one direction
//             Stops at split point
//             That split point is the LCA


// Key Difference (Very Important)
// | Aspect          | `LCA` (Binary Tree) | `LCA_BST` (BST) |
// | --------------- | ------------------- | --------------- |
// | Tree type       | Any Binary Tree     | Only BST        |
// | Uses ordering   | ❌ No                | ✅ Yes           |
// | Recursive calls | Left **and** Right  | Only one side   |
// | Time complexity | O(n)                | O(h)            |
// | Faster          | ❌                   | ✅               |

