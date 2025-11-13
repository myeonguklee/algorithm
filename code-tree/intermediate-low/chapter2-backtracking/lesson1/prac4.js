const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const lines = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));

// Please Write your code here.

const sortedLines = lines.map((line) => [line[1], line[0] - 1]).sort((a, b) => a[0] - b[0]);

const num = Array(n).fill().map((_, idx) => idx);

const len = lines.length;

for(const [_, idx] of sortedLines) {
  [num[idx], num[idx + 1]] = [num[idx + 1], num[idx]];
}

const selectedLines = [];

let mn = 1e9;

function go(idx) {
  if(idx === len) {
    const temp = Array(n).fill().map((_, idx) => idx);

    for(const [_, idx] of selectedLines) {
      [temp[idx], temp[idx + 1]] = [temp[idx + 1], temp[idx]];
    }

    for(let i = 0; i < n; i++) {
      if(num[i] !== temp[i]) return;
    }

    mn = Math.min(mn, selectedLines.length);

    return;
  }

  selectedLines.push(sortedLines[idx]);
  go(idx + 1);
  selectedLines.pop();

  go(idx + 1);
}

go(0);

console.log(mn);
