
function reverseString(str) {
  let stack = [];

  for (let ch of str) {
    stack.push(ch);
  }

  let result = "";
  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}

let str = "Hello";
console.log(reverseStringz(str))  // olleH

// ====================================================================================
// stack = ['H','E','L','L','O']
// result = ""

// | Step | stack.pop() returns | New stack         | result before | result after |
// | ---: | ------------------- | ----------------- | ------------- | ------------ |
// |    1 | 'O'                 | ['H','E','L','L'] | ""            | "O"          |
// |    2 | 'L'                 | ['H','E','L']     | "O"           | "OL"         |
// |    3 | 'L'                 | ['H','E']         | "OL"          | "OLL"        |
// |    4 | 'E'                 | ['H']             | "OLL"         | "OLLE"       |
// |    5 | 'H'                 | []                | "OLLE"        | "OLLEH"      |


