// Input: a a b c
// Output: a - b b

function firstNonRepeating(str) {
  let queue = [];
  let freq = {};

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
    queue.push(ch);

    while (queue.length && freq[queue[0]] > 1) {
      queue.shift();
    }

    console.log(queue.length ? queue[0] : "-");
  }
}
