function rCheck (y, x, v){
  for(let j = 0; j < 9; j++){
    if(v === a[y][j]) return false
  }
  return true;
}

function cCheck (y, x, v){
  for(let i = 0; i < 9; i++){
    if(v === a[i][x]) return false;
  }
  return true;
}

function sCheck (y, x, v){
  const ny = Math.floor(y / 3) * 3;
  const nx = Math.floor(x / 3) * 3;
  for(let i = ny; i < ny + 3; i++){
    for(let j = nx; j < nx + 3; j++){
      if(v === a[i][j]) return false;
    }
  }
  return true;
}

function go(idx, n){
  if(idx === n){
    console.log(a.map((row) => row.join(' ')).join('\n'));
    process.exit();
  }
  const y = b[idx][0];
  const x = b[idx][1];
  for(let j = 1; j <= 9; j++){
    if(rCheck(y, x, j) && cCheck(y, x, j) && sCheck(y, x, j)){
      a[y][x] = j;
      go(idx + 1, n);
      a[y][x] = 0;
    }
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const a = [];
const b = [];

for(let i = 0; i < 9; i++){
  a.push(input[i].split(' ').map(Number));
}

for(let i = 0; i < 9; i++){
  for(let j = 0; j < 9; j++){
    if(a[i][j] === 0) b.push([i, j]);
  }
}

go(0, b.length);
