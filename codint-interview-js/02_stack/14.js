// 표 편집
// https://school.programmers.co.kr/learn/courses/30/lessons/81303

function solution(n, k, cmd) {

  const del = [];

  const up = Array(n + 2).fill().map((_, i) => i - 1);
  const down = Array(n + 2).fill().map((_, i) => i + 1);

  k++;

  for(c of cmd){
    if(c === 'C'){
      del.push(k);
      down[up[k]] = down[k];
      up[down[k]] = up[k];

      if(down[k] > n) k = up[k];
      else k = down[k];
    } else if (c === 'Z'){
      restore = del.pop();
      down[up[restore]] = restore;
      up[down[restore]] = restore;
    } else {
      const [d, v] = c.split(' ');
      if(d === 'U'){
        for(let i = 0; i < Number(v); i++){
          k = up[k];
        }
      }else{
        for(let i = 0; i < Number(v); i++){
          k = down[k];
        }
      }
    }
  }

  const arr = Array(n).fill('O');

  for(idx of del){
    arr[idx - 1] = 'X';
  }

  const answer = arr.join('');


  return answer;
}