1. What is a Linked List? (Interview-Ready Definition):

A Linked List is a linear data structure where each element (node) stores:
        1.Data
        2.A reference (pointer) to the next node (and optionally the previous one):

-------------------------------------------------------
[data | next] → [data | next] → [data | null]
-------------------------------------------------------

2. Why Linked List Exists (Why Not Just Arrays?):
==> Arrays are fixed-size and costly for insertions/deletions
==> Linked lists allow dynamic memory allocation
==> Insert/delete operations do not require shifting elements

===============================================================================
3. Types of Linked Lists (You MUST Know All):

            ==>Singly Linked List
                ==> Each node points to the next node.
                        ==> head → A → B → C → null
            Use:
            ==> Simple memory-efficient lists
            ==> Stack implementations
----------------------------------------

            ==>Doubly Linked List
            ==> Each node points to next and previous nodes.
                ==> null ← A <-> B <-> C → null
            Use:
            ==> Undo/Redo
            ==> Browser history
            ==> LRU Cache (VERY IMPORTANT)
------------------------------------------
            ==> Circular Linked List
                ==> Last node points back to head.

                    A → B → C
                    ↑         ↓
                    ← ← ← ← ←

                use:
                Music playlists
                Round-robin scheduling

-----------------------------------------------
Circular Doubly Linked List (Advanced variant used in OS and memory management)
=================================================================================

Linked List vs Array (Frontend Interview Favorite):

| Feature        | Array      | Linked List    |
| -------------- | ---------- | -------------- |
| Memory         | Contiguous | Non-contiguous |
| Size           | Fixed      | Dynamic        |
| Random Access  | O(1)       | O(n)           |
| Insert/Delete  | O(n)       | O(1)*          | * O(1) if node reference is known
| Cache Friendly | Yes        | No             |

====================================================================================
Core Linked List Operations & Algorithms:

Traversal:
            while (node) {
            node = node.next;
            }

Time: O(n)

-------------------------------
Insertion:
At Head:
        newNode.next = head;
        head = newNode;

        Time: O(1)




