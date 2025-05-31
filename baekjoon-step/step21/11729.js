const n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

const res = [];

function hanoi(n, from, to, mid) {
  if(n === 1){
    res.push(`${from} ${to}`);
    return;
  }
  hanoi(n-1, from, mid, to);
  res.push(`${from} ${to}`);
  hanoi(n-1, mid, to, from);
}

hanoi(n, 1, 3, 2);
console.log(2**n - 1);
console.log(res.join('\n'))