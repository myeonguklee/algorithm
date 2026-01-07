// 튜플
// https://school.programmers.co.kr/learn/courses/30/lessons/64065?language=javascript

function solution(s) {
  var answer = [];

  const a = s.slice(2, -2);
  const arr = a.split("},{").map((a) => a.split(',').map(Number));
  arr.sort((a, b) => a.length - b.length);

  arr.forEach((el) => {
    el.forEach((e) => {
      if(!answer.includes(e)) answer.push(e);
    })
  })
  return answer;
}