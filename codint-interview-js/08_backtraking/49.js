// 피로도
// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {

  const n = dungeons.length;
  const visited = Array(n).fill(0);
  let mx = -1e9;

  // idx 매개 변수 불필요!
  function go(idx, cnt) {
    mx = Math.max(mx, cnt);

    for(let i = 0; i < n; i++){
      if(visited[i]) continue;

      const [minV, V] = dungeons[i];

      if(minV <= k){
        k -= V;
        visited[i] = 1;
        go(i, cnt + 1);
        k += V;
        visited[i] = 0;
      }
    }
  }

  go(0, 0);

  return mx;
}