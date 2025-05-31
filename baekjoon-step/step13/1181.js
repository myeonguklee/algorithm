let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

arr = [...new Set(arr)]

arr.sort((a, b) => {
  if(a.length === b.length){
    for (let i = 0; i < a.length; i++){
      if(a[i] !== b[i]) return a[i].charCodeAt() - b[i].charCodeAt();
    }
  }
  return a.length - b.length;
});

console.log(arr.join('\n'));