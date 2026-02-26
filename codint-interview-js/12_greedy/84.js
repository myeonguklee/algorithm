// 귤고르기
// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {

  const mp = new Map();

  for(let t of tangerine) {
    if(mp.has(t)) mp.set(t, mp.get(t) + 1);
    else mp.set(t, 1);
  }

  const arr = [...mp.values()].sort((a, b) => b - a);

  let sm = 0;
  let cnt = 0;

  for(let a of arr){
    if(sm + a < k){
      cnt ++;
      sm += a;
    } else {
      cnt ++;
      break;
    }
    // 그냥 sm, cnt 더하다가 k 보다 커질때 리턴 하면됨
    // sm += a
    // cnt ++;
    // if(sm >= k) break
  }

  return cnt;
}