  (1) What is a WINDOW? (VERY SIMPLE)
  A window means:
      Some continuous elements you are looking at right now.

arr = [1, 2, 3, 4, 5]
          Window = [2, 3, 4]
           It means:
                  You are only looking at 2, 3, 4
                  You are ignoring 1 and 5
                  They are together (continuous)
                    ==> That group [2,3,4] is called a WINDOW.
============================================================
  (2) How do we choose a window?

      LEFT finger   RIGHT finger

           [1, 2, 3, 4, 5]
               L     R
      Window = everything between L and R:

               [2, 3, 4]
=================================================================
  (3) What does EXPAND mean?

      Expand means:
            Move the RIGHT finger forward
            → window becomes bigger

            Example:

                      Start:
                      [1, 2, 3, 4, 5]
                      L
                      R
                      Window = [1]


                      Expand:
                      [1, 2, 3, 4, 5]
                      L  R
                      Window = [1,2]


                      Expand again:
                      [1, 2, 3, 4, 5]
                      L     R
                      Window = [1,2,3]
                                        ==> Window size is growing.

======================================================================

(4)What does SHRINK mean? (MOST CONFUSING PART)

            Shrink means:
              Move the LEFT finger forward
              → window becomes smaller

              Example
              Current window:
              [1, 2, 3]

              Shrink:
              [2, 3]

              Shrink again:
              [3]

                ==> You are removing elements from the left side.
=======================================================================

(5)WHY do we SHRINK? (THIS IS KEY)
   We shrink ONLY when something is wrong.
        Examples of “wrong”:
        Sum became too big
        Too many characters
        Duplicate found

  ==> Shrink = fix the problem

===========================================================================
(6) REAL LIFE EXAMPLE (VERY IMPORTANT)
Imagine:

    You can carry only 2 apples
    You start picking apples:
    🍎
    Window = 1 apple ✅


    Pick one more:
    🍎🍎
    Window = 2 apples ✅

    Pick one more:
    🍎🍎🍎  (X)TOO MANY


    What do you do?
      ==> DROP one apple from the left

    Now:
    🍎🍎 ✅

    That “dropping” = SHRINK
==============================================================
(7) Very Easy Number Example

Array:
      [2, 3, 1, 2]
      Target sum = 5


      Start:
      Window = [2]   sum = 2

      Expand:
      Window = [2,3] sum = 5 ✅

      Expand again:
      Window = [2,3,1] sum = 6  (X)TOO BIG

      What do we do?
        ==> SHRINK

      Shrink:
      Window = [3,1] sum = 4 ✅
====================================================
8️⃣ IMPORTANT SENTENCE (MEMORIZE THIS)

      Window = what I am currently looking at
      Expand = add from right
      Shrink = remove from left
=====================================================
(9) One Last Super-Simple Table
Action	Finger moves	Result
Expand	Right →	Window grows
Shrink	Left →	Window reduces


========================================================
Window Size Formula:
                    window size = right - left + 1;

What do left and right mean?:
                    index:  0  1  2  3  4
                    array: [1, 2, 3, 4, 5]

                    If==> left:1 and right: 2
                    window==> [2,3,4];

                    window size = right - left + 1
                                = 3 - 1 + 1
                                = 3

How Sliding Happens (Using Formula);
      Expand window (right moves);
                            right++
                            window size increases

      Shink window (left moves);
                            left++
                            window size decreases

=============================================================
Fixed vs Variable Window (Using Formula);

      Fixed Window:
                  right - left + 1 === k

      Variable Window:
                  right - left + 1 >= / <= condition








