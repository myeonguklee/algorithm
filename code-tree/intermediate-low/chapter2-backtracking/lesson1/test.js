const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];

// Please Write your code here.

const n = Math.ceil(expression.length / 2);

let mx = -1e9;

function go(temp = []) {
  if(temp.length === 6) {

    let ret = temp[expression[0].charCodeAt() - 97];

    for(let i = 1; i < expression.length; i+=2) {
      const operation = expression[i];
      const num = temp[expression[i + 1].charCodeAt() - 97];

      if (operation === '+') ret += num;
      else if (operation === '-') ret -= num;
      else ret *= num;
    }

    mx = Math.max(mx, ret);

    return;
  }

  for(let i = 1; i < 5; i++) {
    temp.push(i);
    go(temp);
    temp.pop();
  }
}

go();

console.log(mx);