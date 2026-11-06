var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        max = Math.max(max, area);
        if (height[l] < height[r]) l++;
        else r--;
    }
    return max;

};

height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height))




/* CONTAINER WITH MOST WATER Pattern: LEFT + RIGHT (Two Pointers)

L = Starting index se start hota hai.
R = Last index se start hota hai.
MIN = Dono walls mein chhoti height.
R - L = Dono walls ke beech ki width.
Area = Height * Width.
MAX = Ab tak ka maximum area store karta hai.

POINTER MOVEMENT:

Left height < Right height → L++
Left height > Right height → R--
Dono heights equal → Kisi ek pointer ko move karo.

WHY MOVE SMALLER POINTER?

Chhoti wall water ki height decide karti hai.
Isliye chhoti wall wale pointer ko move karte hain.
Aim: Ek taller wall find karna.
Dono pointers ko ek saath move nahi karna.

LOOP CONDITION:

L < R → Loop chalta rahega. L == R → Pointers mil gaye, loop stop.

COMPLEXITY:

Time = O(n) Space = O(1)

OUTPUT = 49 */