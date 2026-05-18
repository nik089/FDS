How Many Types of Binary Tree?:
 6 main Type
    Binary Tree (Normal)
    Full Binary Tree
    Complete Binary Tree
    Perfect Binary Tree
    Skewed Binary Tree
    Binary Search Tree (BST) ========> * most imp

==================================================
1.Normal Binary Tree:

        A
       /
      B
       \
        C
=> Each node can have 0, 1, or 2 children
=> No special rules
=====================================================
2.Full Binary Tree:

        A
       / \
      B   C
=> Every node has:
            =>0 children OR
            =>2 children

=>No node with only 1 child
-------------------------------
        A
       /
      B

===> Wrong because A has only one child
==============================================================
3.Complete Binary Tree **(Imp)**:

        1
       / \
      2   3
     / \
    4   5

=> Tree is filled level by level
=>Last level filled from left side only

================================================================
4.Perfect Binary Tree:
    Perfect shape

        1
       / \
      2   3
     / \ / \
    4  5 6  7

=>All parent nodes have 2 children:
=>All leaf nodes are at same level:
=================================================================
5.Skewed Binary Tree:
    Left Skewed:

      10
     /
    9
   /
  8

Right Skewed:
     
10
  \
   20
     \
      30


=> (Worst performance)
=> Every node has only one child
=> Looks like a linked list

===================================================================
6.Binary Search Tree (BST) *** Most Imp:

        10
       /  \
      5    20
     / \
    2   8

This tree follows rules:
            =>Left side values smaller    => Left child < Parent
            =>Right side values bigger    =>  Right child > Parent






