// 1. Write a Generic Memoize Function 
//       Create a function that memoizes any function.

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    cache[key] = fn(...args);
    return cache[key];
  };
}

// 2. Memoize a Fibonacci Function
//       Use the memoize function to optimize a Fibonacci function.
function fibonacci(n) {
    if (n <= 1) return n;   
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(5)); // Output: 5

// ===or =====

function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
console.log(fib(5)) // Output: 5
// ==========================================================


// 3. Memoize a Factorial Function          
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120

//=====or========= 

function factorial(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  memo[n] = n * factorial(n - 1, memo);
  return memo[n];
}


// (4)Memoize Function with Multiple Arguments
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

memoizedAdd(2, 3);
memoizedAdd(2, 3);
console.log(memoizedAdd(2, 3)); // Output: 5 (computed once, then cached)

// (5)Memoize Function with Object Arguments
const obj = (a, b) => ({ a, b });
const memoizedObj = memoize(obj);

memoizedObj({ x: 1 }, { y: 2 });
memoizedObj({ x: 1 }, { y: 2 });
console.log(memoizedObj({ x: 1 }, { y: 2 })); // Output: { a: { x: 1 }, b: { y: 2 } }// (computed once, then cached)

// (6) Clear Cache Functionality
function memoizeWithClear(fn) {
  const cache = {};
    const memoizedFn = function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  }
    memoizedFn.clearCache = function() {
    for (let key in cache) {
        delete cache[key];
    }
  }
    return memoizedFn;
}

const memoizedMultiply = memoizeWithClear((a, b) => a * b);
console.log(memoizedMultiply(2, 3)); // Output: 6
console.log(memoizedMultiply(2, 3));// Output: 6 (from cache)
memoizedMultiply.clearCache(); // Clear the cache
console.log(memoizedMultiply(2, 3)); // Output: 6 (recomputed after cache clear)    

// (7) Memoize Asynchronous Function
function memoizeAsync(fn) {
  const cache = {};
    return async function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = await fn(...args);
    return cache[key];
  }
}
const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
}
const memoizedFetchData = memoizeAsync(fetchData);
memoizedFetchData('https://api.example.com/data').then(data => {
  console.log(data); // Fetched data
  return memoizedFetchData('https://api.example.com/data');
}).then(cachedData => {
  console.log(cachedData); // Cached data
});
// Output: 120
// ==========================================================
console.log(factorial(5)) // Output: 120
// ==========================================================


// 8️⃣ Memoize Function with Array Arguments
function memoizeEven() {
  const cache = {};
  return function (arr) {
    const key = arr.join(',');

    if (cache[key]) return cache[key];

    const evens = arr.filter(n => n % 2 === 0);
    cache[key] = evens;
    return evens;
  };
}

const getEven = memoizeEven();

getEven(arr); // [2,4,6,8]
getEven(arr); // cached
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getEven(arr)); // Output: [2, 4, 6, 8]
