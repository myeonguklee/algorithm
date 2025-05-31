// 그 계절, 그 날

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

function isLeap (y) {
  if (y % 4 !== 0) return false;
  else if (y % 100 === 0 && y % 400 !== 0) return false;
  return true;
}

function isValidate (y, m, d) {
  if (m > 12) return false
  if (m === 2){
    if(isLeap(y)){
      if(d > 29) return false;
    }
    else{
      if(d > 28) return false;
    }
  }
  if (m === 2 || m === 4 || m === 6 || m === 9 || m === 11){
    if(d > 30) return false;
  } else {
    if(d > 31) return false;
  }
  return true;
}

if(isValidate(year, month, day)){
  switch (month) {
    case 3: case 4: case 5:
      console.log("Spring");
      break;
    case 6: case 7: case 8:
      console.log("Summer");
      break;
    case 9: case 10: case 11:
      console.log("Fall");
      break;
    case 12: case 1: case 2:
      console.log("Winter");
      break;
  }
}else{
  console.log(-1);
}