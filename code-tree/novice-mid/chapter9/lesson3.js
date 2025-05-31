const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ");
// Please Write your code here.

let cnt = 0;

for(let i = 0; i < n; i++){
  for(let j = i + 1; j < n; j++){
    if(arr[j] === String.fromCharCode(i + 65)){
      for(let k = j; k > i; k--){
        [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]];
        cnt++;
      }
      break;
    }
  }
}

console.log(cnt);