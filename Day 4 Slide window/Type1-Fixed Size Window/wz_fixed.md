╔══════════════════════════════════════════════════════════════╗
║              🟨 SLIDING WINDOW — FIXED WINDOW               ║
╚══════════════════════════════════════════════════════════════╝


🟨 1. FIXED WINDOW KYA HAI?

FIXED = WINDOW KA SIZE FIXED HAI = K

Window ka size kabhi change nahi hota.
Sirf window aage MOVE karti hai.

Example:
K = 3

[1, 2, 3, 4, 5]

Windows:

[1, 2, 3]
   ↓
[2, 3, 4]
   ↓
[3, 4, 5]

Har window mein EXACTLY 3 elements hain.

🧠 YAAD:
"SIZE FIXED → WINDOW SLIDE"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟨 2. FIXED WINDOW MEIN KYA HOTA HAI?

Har baar sirf 2 kaam:

❌ LEFT SE → 1 OLD ELEMENT REMOVE
➕ RIGHT SE → 1 NEW ELEMENT ADD

Window ka size same rehta hai.

Example:

[2, 1, 5]        →  [1, 5, 1]
  ❌                 ➕

Remove 2
Add 1

Size:
3 → 3 → 3 → 3


🧠 MANTRA:

"EK BAHAR ❌
 EK ANDAR ➕
 SIZE SAME"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟨 3. POINTERS KAISE MOVE KARTE HAIN?

LEFT  → window ka START
RIGHT → window ka END

RIGHT → ➡️ AAGE MOVE → NEW ELEMENT ADD
LEFT  → ➡️ AAGE MOVE → OLD ELEMENT REMOVE

Dono SAME DIRECTION mein move karte hain.

Example:

[2, 1, 5, 1, 3, 2]
 ↑        ↑
LEFT    RIGHT

Window size = 3


🧠 IMPORTANT:

RIGHT = ADD ➕
LEFT  = REMOVE ➖


Window size:

RIGHT - LEFT + 1 = K


Example:

LEFT = 0
RIGHT = 2

2 - 0 + 1 = 3 ✅


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟨 4. KAB FIXED WINDOW LAGANA HAI?

Question mein ye words/meaning aaye:

✅ "subarray of size K"
✅ "substring of length K"
✅ "exactly K elements"
✅ "window of size K"
✅ "K consecutive elements"
✅ "every K elements"

→ 🟨 FIXED SLIDING WINDOW


🧠 SHORTCUT:

"K FIXED HAI?"
      ↓
    YES
      ↓
🟨 FIXED WINDOW


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟨 5. EXAMPLE — MAXIMUM SUM OF K ELEMENTS

Array:

[2, 1, 5, 1, 3, 2]

K = 3

Question:
"Find maximum sum of subarray of size 3"


STEP 1️⃣ — FIRST WINDOW

[2, 1, 5, 1, 3, 2]
 └───────┘
    K=3

2 + 1 + 5 = 8

SUM = 8


STEP 2️⃣ — SLIDE

Remove 2 ❌
Add 1   ➕

[2, 1, 5, 1, 3, 2]
    └───────┘

Window:
[1, 5, 1]

SUM = 7


STEP 3️⃣ — SLIDE

Remove 1 ❌
Add 3   ➕

[2, 1, 5, 1, 3, 2]
       └───────┘

Window:
[5, 1, 3]

SUM = 9 ⭐ MAX


STEP 4️⃣ — SLIDE

Remove 5 ❌
Add 2   ➕

[2, 1, 5, 1, 3, 2]
          └───────┘

Window:
[1, 3, 2]

SUM = 6


FINAL ANSWER = 9 ✅


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟨 6. SLIDING WINDOW KA MAGIC ⭐

Normal approach:

Har window ka SUM dobara calculate karo.

[2,1,5] → 8
[1,5,1] → 7
[5,1,3] → 9
[1,3,2] → 6

❌ Baar-baar calculation.


Sliding Window:

OLD SUM ko reuse karo.

NEW SUM =
OLD SUM
- element leaving
+ element entering


Formula:

sum = sum - arr[left] + arr[right]


Ya agar RIGHT pointer use kar rahe ho:

sum = sum - arr[right - K] + arr[right]


🧠 YAAD:

"PURANA HATAO
 NAYA JODHO"


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟨 7. CODE PATTERN

function maxSum(arr, k) {

    let sum = 0;

    // FIRST WINDOW
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    let max = sum;

    // SLIDE WINDOW
    for (let right = k; right < arr.length; right++) {

        sum = sum
            - arr[right - k]
            + arr[right];

        max = Math.max(max, sum);
    }

    return max;
}


Example:

maxSum([2, 1, 5, 1, 3, 2], 3)

OUTPUT:
9


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟨 8. arr[right - k] KYUN?

RIGHT = NEW ELEMENT

right - k = WINDOW SE BAHAR JAANE WALA ELEMENT

Example:

K = 3
right = 3

right - k
3 - 3
= 0

arr[0] = 2

So:

OLD SUM - arr[0] + arr[3]

8 - 2 + 1
= 7


🧠 SUPER MANTRA:

arr[right]     → 🟢 NAYA / ENTERING
arr[right - k] → 🔴 PURANA / LEAVING


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🟨 9. FINAL MEMORY CARD ⭐⭐⭐

FIXED SLIDING WINDOW

"K diya hai?"
      ↓
    YES
      ↓
WINDOW SIZE = K
      ↓
RIGHT → ➡️ ADD NEW
LEFT  → ➡️ REMOVE OLD
      ↓
SIZE ALWAYS = K


🔥 GOLDEN LINE:

"EK ELEMENT BAHAR,
 EK ELEMENT ANDAR,
 WINDOW KA SIZE SAME."


🔥 SUM PROBLEM:

NEW SUM
= OLD SUM
- LEAVING
+ ENTERING


🔥 CODE:

sum = sum - arr[right - k] + arr[right];


🔥 TRIGGER WORDS:

K
SIZE K
LENGTH K
EXACTLY K
CONSECUTIVE K
SUBARRAY OF SIZE K

             ↓

      🟨 FIXED WINDOW