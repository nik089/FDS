1. What Is Memoization? (Very Basic)
Memoization means:

    Saving the result of a function so that next time the same input comes, 
    we return the saved result instead of calculating again.

    In simple words:
        Calculate once
        Store result

2. Why Do We Need Memoization?
    Because some functions:
        Are called again and again
        Do the same calculations repeatedly
        Become slow

3. Basic Memoization Example (Very Easy);
    1.Normal Function (No Memoization);

        function add(a, b) {
            return a + b;
        }

    2.Memoized Version

    function memoizedAdd() {
        let cache = {};

            return function (a, b) {
                let key = `${a},${b}`;

                if (key in cache) {
                return cache[key];      // <-- return from cache (fast)
                }

                let result = a + b;  // <-- compute (slow)
                cache[key] = result;  // <-- save result in cache
                return result;
            };
        }

    const add = memoizedAdd();


console.log(add(2, 3));  // First time: calculates 2 + 3 = 5
console.log(add(2, 3));  // Second time: returns from cache (no calculation)
console.log(add(5, 7));  // Calculates 12
console.log(add(5, 7));  // Returns 12 from cache

