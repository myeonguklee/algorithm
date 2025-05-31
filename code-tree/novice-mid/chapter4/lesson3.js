const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

const cnt = Array(200_004).fill(0);
let idx = 100_000;

// 검 1, 흰 -1
for(let i = 0; i < n; i++){
  let [x, d] = commands[i].split(' ');
  x = parseInt(x);

  if(d === 'R'){
    for(let i = idx; i < idx + x; i++){
      cnt[i] = 1;
    }
    idx += (x - 1);
  }else{
    for(let i = idx; i > idx - x; i--){
      cnt[i] = -1;
    }
    idx -= (x - 1);
  }
}

let b = 0;
let w = 0;

for(let i = 0; i < 200_004; i++){
  if(cnt[i] === 1) b++;
  else if(cnt[i] === -1) w++;
}

console.log(w, b);