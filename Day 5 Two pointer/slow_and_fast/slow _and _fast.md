             ===============================================
1.🟨 SLOW + FAST

FAST = 🔎 DHUNDHO / SCAN
SLOW = 📦 RAKHO / BUILD ANSWER

FAST (j) → HAR LOOP ME ++
SLOW (i) → SIRF USEFUL / NEW ELEMENT MILE TO ++

Example:
[1, 1, 2, 2, 3]
 ↑  ↑
 i  j
slow fast


⭐ IMPORTANT CODE:

if (nums[i] !== nums[j]) {
    i++;
    nums[i] = nums[j];
}

Meaning:
nums[i] === nums[j]
→ SAME ❌
→ i nahi badhega
→ j aage jayega

nums[i] !== nums[j]
→ NEW ✅
→ i++
→ nums[j] ko nums[i] par RAKH DO


🧠 YAAD:
"FAST DHUNDHE → SLOW RAKHE"

🔥 POINTER MOVEMENT:
j → HAR BAAR ++
i → NEW/USEFUL MILE TAB ++



Trigger:
✅ Remove Duplicates
✅ Move Zeroes
✅ Remove Element
✅ Partition
🧠 Trigger:(when used)
"KEEP / REMOVE / MOVE / FILTER"

=======================================
             SLOW & FAST
                  │
        ┌─────────┼─────────┐
        ↓         ↓         ↓
     Middle     Cycle    Cycle Start
        │         │         │
       +1        +1/+2      Meet
        │         │          ↓
       +2        Same       slow=head
        │       node?        ↓
        ↓         ↓       Both +1
      Middle     YES          ↓
                 Cycle     Start



=========================================
SLOW & FAST POINTER — SHORT NOTES

Concept:
slow → 1 step
fast → 2 steps

Initialize:
slow = head
fast = head

Main Uses:
1. Find Middle
2. Detect Cycle
3. Find Cycle Start

Middle:
while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
}
return slow;

Cycle:
if (slow === fast)
    → Cycle exists

If fast reaches null:
    → No cycle

Cycle Start:
1. Detect cycle
2. slow = head
3. Move both 1 step
4. Meeting point = cycle start

Important:
Use slow === fast
NOT slow.val === fast.val

Complexity:
Time  = O(n)
Space = O(1)

Memory Trick:
FAST = 2
SLOW = 1

Fast reaches END → Middle
Slow meets Fast → Cycle
Meet → slow=head → both +1 → Cycle Start