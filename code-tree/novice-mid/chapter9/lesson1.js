const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
  const [x1, x2] = input[i].split(' ').map(Number);
  x1List.push(x1);
  x2List.push(x2);
}

// Please Write your code here.

for(let i = 0; i < n; i++){
  let x1Max = -1e9;
  let x2Min = 1e9;

  for(let j = 0; j < n; j++){
    if(j === i) continue;
    x1Max = Math.max(x1Max, x1List[j]);
    x2Min = Math.min(x2Min, x2List[j]);
  }

  if(x2Min >= x1Max){
    console.log('Yes');
    process.exit();
  }
}

console.log('No');

