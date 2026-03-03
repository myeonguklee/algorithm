// 기지국 설치
// https://school.programmers.co.kr/learn/courses/30/lessons/12979

function solution(n, stations, w) {
  const len = stations.length;

  let idx = 1;
  let cnt = 0;

  for(let i = 0; i < len; i++) {
    const start = stations[i] - w;
    const end = stations[i] + w;

    if(idx < start) cnt += Math.ceil((start - idx) / (2* w + 1));
    idx = end + 1;
  }

  if(idx < n)cnt += Math.ceil((n - idx) / (2* w + 1))
  else if(idx === n) cnt++;

  return cnt;
}