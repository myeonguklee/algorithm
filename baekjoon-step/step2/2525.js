const fs = require('fs');
const [time, num] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = time.split(" ").map(Number);
const intNum = Number(num);

if (b + intNum >= 60) console.log((a + Math.floor((b + intNum)/60)) % 24, (b + intNum) % 60);
else console.log(a, b + intNum)