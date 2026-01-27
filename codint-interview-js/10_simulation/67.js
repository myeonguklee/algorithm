// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// 카펫

function solution(brown, yellow) {
  const n = brown + yellow

  for(let i = 0; i < n + 1; i++) {
    // 세로 길이 i
    if(n % i === 0){
      // 가로 길이 j
      let j = Math.floor(n / i);
      // 갈색 테두리 1줄 배치 개수
      const b = 2 * j + 2 * i - 4;
      // 전체 개수 - 갈색 테두리 가 노란색 개수이 때
      if((n - b) === yellow){
        return [j, i];
      }
    }
  }
}