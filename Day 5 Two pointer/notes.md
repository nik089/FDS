TWO POINTER
│
├── 🟨 SLOW + FAST
│      → ek pointer SCAN kare
│      → ek pointer ANSWER banaye
│
└── 🟦 LEFT + RIGHT
       → dono pointers ENDS se start kare
       → dono andar ki taraf move kare
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

=================================================
2. 🟦 LEFT + RIGHT

LEFT  → 👈 START SE
RIGHT → 👉 END SE

➡️ LEFT generally ++
➡️ RIGHT generally --

Dono ek-doosre ki taraf aate hain.

Palindrome:
[ r a c e c a r ]
  ↑             ↑
  L             R

L++ → andar
R-- → andar

Two Sum Sorted:
❌ Dono blindly nahi badhenge

SUM < TARGET → LEFT++
SUM > TARGET → RIGHT--
SUM = TARGET → 🎯 FOUND

🧠 YAAD:
"LEFT + RIGHT = ENDS SE ANDAR"
🧠 Trigger:(when used)
"START vs END"

Mostly:
✅ Reverse
✅ Palindrome
✅ Two Sum Sorted
✅ Container With Most Water