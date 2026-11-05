TWO POINTER
│
├── 🟨 SLOW + FAST
│      → ek pointer SCAN kare
│      → ek pointer ANSWER banaye
│
└── 🟦 LEFT + RIGHT
       → dono pointers ENDS se start kare
       → dono andar ki taraf move kare
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