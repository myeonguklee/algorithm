const[n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// n! / ( (n - k)! * k! )

let a = 1
let b = 1;
let c = 1;

for(let i = 1; i <= n; i++){
  a *= i;
}

for(let i = 1; i <= (n - k); i++){
  b *= i;
}

for(let i = 1; i <= k; i++){
  c *= i;
}

console.log(a/b/c);