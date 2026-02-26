// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {

  const arr = [...d].sort((a, b) => a- b);
  const n = arr.length;

  let sm = 0;
  let cnt = 0;

  for(let i = 0; i < n; i++){
    sm += arr[i];
    if(sm > budget) break;
    else cnt++;
  }

  return cnt;
}