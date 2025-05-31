const n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

arr = Array(n).fill().map(() => Array(n).fill('*'));

function go(s, e, size){
  if(size === 1) return;

  for(let i = s + size/3; i < s + size/3*2; i++){
    for(let j = e + size/3; j < e + size/3*2; j++){
      arr[i][j] = ' ';
    }
  }

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(i === 1 && j === 1) continue;
      go(s + i * size/3, e + j * size/3, size/3);
    }
  }

}

go(0, 0, n);

console.log(arr.map(r => r.join('')).join('\n'));