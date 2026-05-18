What is Traversal?
    Traversal = the order in which we visit nodes of a tree.
    eg:==>

        10
       /  \
      5    20
     / \
    3   7

===================================================
1.Inorder Traversal (DFS = Depth First Search):
----------------------
                ==>Left → Root → Right

                =>Steps:
                        1.Go to left subtree
                        2.Print root
                        3.Go to right subtree

3 → 5 → 7 → 10 → 20

Why Important:
            =>In a BST, inorder gives sorted order
=====================================================
2.Preorder Traversal (DFS = Depth First Search):
----------------------
                    => Root → Left → Right

                    =>Steps:
                            1.Print root first
                            2.Go left
                            3.Go right

10 → 5 → 3 → 7 → 20

Why Important?:
            => Used to copy tree
            =>Used in expression trees
=========================================================
eg:        
        10
       /  \
      5    20
     / \
    3   7

3.Postorder Traversal(DFS = Depth First Search):
----------------------
                    => Left → Right → Root

                    =>Steps:
                            1.Go left
                            2.Go right
                            3.Print root first

3 → 7 → 5 → 20 → 10

Why Important?:
            => Used to delete tree
            =>Used in file systems
==============================================================
eg:     10
       /  \
      5    20
     / \
    3   7

4.Level Order Traversal(BFS)=>Breadth First Search:
-----------------------
                    => Top to Bottom, Left to Right

10 → 5 → 20 → 3 → 7


Why Important?:
            => Used in shortest path
            =>Uses queue

================================================================
All Traversals at a Glance:

        10
       /  \
      5    20
     / \
    3   7

| Traversal   | Rule       | Output      |
| ----------- | ---------- | ----------- |
| Inorder     | L → R → R  | 3 5 7 10 20 |
| Preorder    | R → L → R  | 10 5 3 7 20 |
| Postorder   | L → R → R  | 3 7 5 20 10 |
| Level Order | Level-wise | 10 5 20 3 7 |

=============================================










            
