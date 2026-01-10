1. What is a Binary Tree? (In Simple Words)

    A Binary Tree is a non-linear data structure where:
    Each node can have maximum two children

        These children are called:
            Left child
            Right child

It is called a tree because it looks like an inverted tree structure.

==========================================================================
Binary Tree Example Graph:

          A
         / \
        B   C
       /
      D

1. Root (Top node):
    Root = the very top node

============================
2. Parent (Node that has child):
    Parent = any node that has at least one child
    So:
    A = Parent
    B = Parent
    
          A   ← Parent
         / \
        B   C
       /
      D

    A is parent of B and C   
    B is parent of D
====================================
3. Child (Node below):
    Child = node that comes below another node:

          A
         / \
        B   C   ← Children of A
       /
      D        ← Child of B

   B and C are children of A
   D is child of B

=======================================
4. Leaf (Node with NO child):
    Leaf = node that has ZERO children:
     
          A
         / \
        B   C  ← Leaf
       /
      D       ← Leaf

    C has no child → Leaf
    D has no child → Leaf
============================================
5. Edge (Line between nodes):
    Edge = the line connecting two nodes

          A
         / \
        B   C
       /
      D

Edges are:
    Line between A → B
    Line between A → C
    Line between B → D
=======================================

Binary Tree Node Representation:

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
================================
Time Comp:==>
        Traversal of Binary Tree: O(n)
        Search in Binary Tree: O(n)
        Search in Balanced BST: O(log n)
        Worst-case BST: O(n)
==================================
Do you know why BST is faster:
    A BST is faster because it stores data in a sorted order, 
    allowing us to eliminate half of the tree at each step, similar to binary search

