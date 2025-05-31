const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.

const monthDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getDays (m, d){
  let days = d;
  for(let i = 1; i < m; i++){
    days += monthDay[i];
  }
  return days;
};

const diff = getDays(m2, d2) - getDays(m1, d1);

let cnt = Math.floor(diff / 7);
let last = diff % 7;
let idx = day.indexOf(A);

console.log((idx <= last) ? cnt + 1 : cnt);

