// https://school.programmers.co.kr/learn/courses/30/lessons/132265
// 롤케이크 자르기

function solution(topping) {
  let answer = 0;

  const n = topping.length;

  const st = new Set();
  const mp = new Map();

  for(let t of topping){
    if(mp.get(t)) mp.set(t, mp.get(t) + 1);
    else mp.set(t, 1);
  }

  for(let t of topping){
    st.add(t);
    mp.set(t, mp.get(t) - 1);

    if(mp.get(t) === 0) mp.delete(t);
    if(st.size === mp.size) answer++;
  }

  return answer;
}