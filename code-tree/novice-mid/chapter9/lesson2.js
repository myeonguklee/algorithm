const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = Number(input[0]);

// Please write your code here.

let t = 0;
let leftD = x;
let v = 1;

while(true){
  leftD -= v;
  t++;

  if(leftD === 0) break;

  if(leftD >= (v + 1) * (v + 2) / 2) v += 1;
  else if (leftD >= v * (v + 1) / 2) {}
  else v -= 1
}

console.log(t);