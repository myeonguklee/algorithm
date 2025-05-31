const[n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const array = [];
const visited = Array(n + 1).fill(0);
const res = [];

function go(idx, n, m){
  if(array.length === m){
    res.push(array.join(' '));
    return;
  }
  for(let i = idx; i <= n; i++){
    if(visited[i]) continue;
    visited[i] = 1;
    array.push(i);
    go(idx, n, m);
    array.pop();
    visited[i] = 0;
  }
}

go(1, n, m);
console.log(res.join('\n'));

// swap 활용, 순서 보장이 빡셈
// const array= Array(n).fill(0).map((_, i) => i + 1);
// const res = [];
//
// function go (n, m, depth) {
//   if(depth === m){
//     res.push(array.slice(0, m).join(' '));
//     return;
//   }
//   for(let i = depth; i < n; i++){
//     [array[i], array[depth]] = [array[depth], array[i]];
//     go(n, m, depth + 1);
//     [array[i], array[depth]] = [array[depth], array[i]];
//   }
//
// }
//
// go(n, m, 0);
// console.log(res.join('\n'));