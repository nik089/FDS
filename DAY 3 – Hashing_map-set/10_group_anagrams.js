

function groupAnagrams(arr) {
  const map = new Map();
  for(let w of arr){
    const key = w.split('').sort().join('');
    if(!map.has(key)){
      map.set(key, []);
    }
    map.get(key).push(w);
  }
  return [...map.values()]

}
let arr = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(arr));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
