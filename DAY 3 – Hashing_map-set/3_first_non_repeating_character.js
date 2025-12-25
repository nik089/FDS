
function firstNonRepeatingCharacter(str) {
    const map = new  Map();

    for(let ch of str){
        map.set(ch, (map.get(ch)  ??  0) +1)
    }

    for( let c of str){
        if(map.get(c) ===1 ) return c
    }
 }


 let str = 'leetcode';
 console.log(firstNonRepeatingCharacter(str)); // l


//  Loop 1 — Frequency counting
// | Iteration | `ch` | `map.get(ch)` before | New Value | Map State                        |
// | --------- | ---- | -------------------- | --------- | -------------------------------- |
// | 1         | n    | undefined            | 1         | { n:1 }                          |
// | 2         | i    | undefined            | 1         | { n:1, i:1 }                     |
// | 3         | t    | undefined            | 1         | { n:1, i:1, t:1 }                |
// | 4         | e    | undefined            | 1         | { n:1, i:1, t:1, e:1 }           |
// | 5         | s    | undefined            | 1         | { n:1, i:1, t:1, e:1, s:1 }      |
// | 6         | h    | undefined            | 1         | { n:1, i:1, t:1, e:1, s:1, h:1 } |


// | Iteration | `c` | `map.get(c)` | Condition (`=== 1`) | Action         |
// | --------- | --- | ------------ | ------------------- | -------------- |
// | 1         | n   | 1            | true                | **return 'n'** |
// | 2         | i   | —            | —                   | ❌ Not executed |
// | 3         | t   | —            | —                   | ❌ Not executed |
// | 4         | e   | —            | —                   | ❌ Not executed |
// | 5         | s   | —            | —                   | ❌ Not executed |
// | 6         | h   | —            | —                   | ❌ Not executed |
