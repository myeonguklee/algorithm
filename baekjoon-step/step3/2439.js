const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

for(let i = 1; i <= n; i++){
  console.log(" ".repeat(n - i) + "*".repeat(i));
}
