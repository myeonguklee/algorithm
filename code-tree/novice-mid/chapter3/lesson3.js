const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
  const [height, weight] = input[i].split(' ').map(Number);
  studentInputs.push([height, weight]);
}

// Please Write your code here.

for(let i = 0; i < n; i++){
  studentInputs[i].push(i + 1);
}

studentInputs.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

studentInputs.map((student) => console.log(student[0], student[1], student[2]));