1. What is BFS?
----------------
    BFS = Breadth First Search:
                               =>Visits nodes level by level
                               =>Goes wide first
                               =>Uses a Queue (FIFO)

Example order:
                Level 1 → Level 2 → Level 3

===============================================
2. What is DFS?
------------------
        DFS = Depth First Search:
                                Goes deep first
                                Finishes one branch before moving to another
                                Uses Recursion / Stack (LIFO)

Example order:
             Go deep → come back → go deep again

==========================================================
eg:

    
        1
       / \
      2   3
     / \
    4   5

BFS Traversal (Level Order):==>  1 → 2 → 3 → 4 → 5
=====================================================
DFS Traversals: 
                1.Preorder (DFS): 1 → 2 → 4 → 5 → 3
                Rule: Root → Left → Right:

                2.Inorder (DFS): 4 → 2 → 5 → 1 → 3
                Rule: Left → Root → Right

                3.Postorder (DFS): 4 → 5 → 2 → 3 → 1
                Rule: Left → Right → Root:

=======================================================
Key Differences (INTERVIEW TABLE):

| Feature        | BFS                  | DFS                |
| -------------- | -------------------- | ------------------ |
| Full Form      | Breadth First Search | Depth First Search |
| Order          | Level by level       | Depth first        |
| Data Structure | Queue                | Stack / Recursion  |
| Memory         | Higher               | Lower              |
| Best For       | Shortest path        | Deep search        |
| Used In Trees  | Level order          | In/Pre/Post order  |

Time Complexity (Both): O(n):

================================================================
==> When to Use What? (Very Important)
            Use BFS when:
                        You need shortest path
                        Tree is wide
                        Level-wise processing needed

            Use DFS when:
                        Tree is deep
                        Less memory needed
                        Backtracking problems
                
================================================================
What is a Binary Tree? How is it different from a Binary Search Tree?
                A Binary Tree allows at most two children per node with no order, 
                whereas a Binary Search Tree maintains sorted order where left < root < right.



1. What Is BT and BST?
    Binary Tree (BT):
        A data structure
        Each node has at most two children
        No ordering rule

    Binary Search Tree (BST):
        A type of Binary Tree
        Has ordering rules:
        Left < Root < Right
