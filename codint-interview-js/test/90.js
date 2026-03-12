// 쿼드압축 후 개수 세기
// https://school.programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  const answer = [0, 0];

  function go(n, sr, er, sc, ec) {
    let zero = 0;
    let one = 0;

    for(let i = sr; i < er; i++) {
      for(let j = sc; j < ec; j++) {
        if(arr[i][j]) one++;
        else zero++;
      }
    }

    if(zero === n**2) answer[0]++;
    else if (one === n**2) answer[1]++;
    else{
      go(n/2, sr, (sr + er)/2, sc, (sc + ec)/2);
      go(n/2, sr, (sr + er)/2, (sc + ec)/2, ec);
      go(n/2, (sr + er)/2, er, sc, (sc + ec)/2);
      go(n/2, (sr + er)/2, er, (sc + ec)/2, ec);
    }
  }

  const len = arr.length;

  go(len, 0, len, 0, len);

  return answer;
}