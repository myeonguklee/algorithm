// 다단계 칫솔 판매
// https://school.programmers.co.kr/learn/courses/30/lessons/77486

function solution(enroll, referral, seller, amount) {

  const answer = {};
  const rel = {};

  for(let i = 0; i < enroll.length; i++){
    answer[enroll[i]] = 0;
    rel[enroll[i]] = referral[i];
  }

  for(let i = 0; i < seller.length; i++){
    let sm = amount[i] * 100;
    let curr = seller[i];

    while(true){

      let per = Math.floor(sm/10);
      let next = rel[curr];
      answer[curr] += (sm - per);

      sm = per
      curr = next;

      // 여기 분기 필요 없어
      // if(per < 1) {
      //   break;
      // } else {
      //   answer[curr] -= per;
      //   if(next === "-") break;
      //   sm = per;
      //   curr = next;
      // }
    }
  }
  return Object.values(answer);
}