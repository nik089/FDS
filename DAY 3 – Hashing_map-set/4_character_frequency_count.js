

function characterFrequencyCount(str) {
    const map = new Map();

    for(let c of str){
        map.set(c, (map.get(c) ?? 0) +1);
    }
    // return map; // if you want to return a Map
    return Object.fromEntries(map); // if you want to return an object instead of a Map
    
}

let str = "hello world";

console.log(characterFrequencyCount(str)); // Map { 'h' => 1, 'e' => 1, 'l' => 3, 'o' => 2, ' ' => 1, 'w' => 1, 'r' => 1, 'd' => 1 }
// console.log([...characterFrequencyCountMap("hello world")]); // also return map not  object instead of a Map
// [
//   [ 'h', 1 ],
//   [ 'e', 1 ],
//   [ 'l', 3 ],
//   [ 'o', 2 ],
//   [ ' ', 1 ],
//   [ 'w', 1 ],
//   [ 'r', 1 ],
//   [ 'd', 1 ]
// ]



//if u want as key and value pair
function characterFrequencyCount(str) {
    const map = new Map();

    for(let c of str){
        map.set(c, (map.get(c) ?? 0) +1);
    }
    const result = [...map].map(([key, value]) => ({ key, value }));
    return result
    
}

let str1 = "hello world";
console.log(characterFrequencyCount(str1));
// [
//   { key: 'h', value: 1 },            
//   { key: 'e', value: 1 },
//   { key: 'l', value: 3 },
//   { key: 'o', value: 2 },
//   { key: ' ', value: 1 },
//   { key: 'w', value: 1 },
//   { key: 'r', value: 1 },
//   { key: 'd', value: 1 }
// ]
