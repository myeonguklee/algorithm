// https://school.programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

function solution(numbers) {
  let answer = [];

  const st = new Set();

  const n = numbers.length;
  for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
      st.add(numbers[i] + numbers[j]);
    }
  }

  answer = [...st].sort((a, b) =>  a - b);

  return answer;
}