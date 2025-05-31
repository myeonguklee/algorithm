const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let i = 1;
while(true){
  if(n <= (i * (i + 1) / 2)) break;
  i++;
}

let j = n - ((i-1) * i / 2);

if(i % 2) console.log(`${i + 1 - j}/${j}`);
else console.log(`${j}/${i + 1 - j}`);
