// 구명보트
// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {

  const sortedPeople = [...people].sort((a, b) => a - b);
  const n = sortedPeople.length;

  let s = 0;
  let e = n - 1;

  let cnt = 0;
  console.log(sortedPeople);

  while(s <= e) {
    if(sortedPeople[s] + sortedPeople[e] <= limit){
      cnt++;
      s++;
      e--;
    }else{
      cnt++;
      e--;
    }
  }

  return cnt;
}