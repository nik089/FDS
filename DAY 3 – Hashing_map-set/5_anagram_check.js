function isAnagram(str1, str2) {
    if (s.length !== t.length) return false;

    const map = new map();


    for (let c of str1) {
        map.set(c, (map.get(c) ?? 0) + 1)
    }

    for (let ch of str2) {
        {
            if (!map.get(ch) || map.get(ch) === 0) return false;
            map.set(ch, map.get(ch) - 1);
        }
        return true;
    }
}

let str1 = "listen";
let str2 = "silent";
console.log(isAnagram(str1, str2)); // true

str1 = "hello";
str2 = "world";
console.log(isAnagram(str1, str2)); // false


// Step 0 — Length check
// | s.length | t.length | Result   |
// | -------- | -------- | -------- |
// | 6        | 6        | Continue |

// Loop 1 — Build frequency map from s
// | Iteration | `ch` | Previous Count | New Count | Map State                        |
// | --------- | ---- | -------------- | --------- | -------------------------------- |
// | 1         | l    | undefined      | 1         | { l:1 }                          |
// | 2         | i    | undefined      | 1         | { l:1, i:1 }                     |
// | 3         | s    | undefined      | 1         | { l:1, i:1, s:1 }                |
// | 4         | t    | undefined      | 1         | { l:1, i:1, s:1, t:1 }           |
// | 5         | e    | undefined      | 1         | { l:1, i:1, s:1, t:1, e:1 }      |
// | 6         | n    | undefined      | 1         | { l:1, i:1, s:1, t:1, e:1, n:1 } |


// Loop 2 — Validate characters from t
// | Iteration | `ch` | `map.has(ch)` | Count Before | Action    | Map After |
// | --------- | ---- | ------------- | ------------ | --------- | --------- |
// | 1         | s    | true          | 1            | decrement | s → 0     |
// | 2         | i    | true          | 1            | decrement | i → 0     |
// | 3         | l    | true          | 1            | decrement | l → 0     |
// | 4         | e    | true          | 1            | decrement | e → 0     |
// | 5         | n    | true          | 1            | decrement | n → 0     |
// | 6         | t    | true          | 1            | decrement | t → 0     |

// Anagram condition:
// count_s(character) − count_t(character) = 0
// // for all characters in s and t
// Final Map State: { l:0, i:0, s:0, t:0, e:0, n:0 }

