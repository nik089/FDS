// 2️⃣ Check Valid Parentheses (MOST ASKED)
// 
// | Input      | Result | Reason                 |
// | ---------- | ------ | ---------------------- |
// | `"(){}[]"` | true   | All matched correctly  |
// | `"({[]})"` | true   | Properly nested        |
// | `"(]"`     | false  | Wrong closing type     |
// | `"({)"`    | false  | Closed before matching |

function isValidParentheses(s) {
  let stack = [];
  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      let last = stack.pop();
      if (
        (ch === ')' && last !== '(') ||
        (ch === '}' && last !== '{') ||
        (ch === ']' && last !== '[')
      ) {
        return false;
      }
    }
  }
  return true
}

let str ="({()]{}})"
console.log(isValidParentheses(str)) // false
