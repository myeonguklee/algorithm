// 전력망을 둘로 나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  var answer = Infinity;

  for(let i = 0; i < n - 1; i++) {
    const graph = Array(n + 1).fill().map(() => []);
    const visited = Array(n + 1).fill(0);

    for(let j = 0; j < n - 1; j++) {
      if(i === j) continue;
      const [v1, v2] = wires[j];
      graph[v1].push(v2);
      graph[v2].push(v1);
    }

    function go(idx) {
      visited[idx] = 1;
      let cnt = 1;

      for(const next of graph[idx]){
        if(visited[next]) continue;
        cnt += go(next);
      }

      return cnt;
    }

    let cnt1, cnt2;

    for(let k = 1; k < n + 1; k++){
      if(!visited[k]) {
        cnt1 = go(k);
        break;
      };
    }

    for(let k = 1; k < n + 1; k++){
      if(!visited[k]) {
        cnt2 = go(k);
        break;
      };
    }
    answer = Math.min(answer, Math.abs(cnt1 - cnt2));
  }

  return answer;
}