function solution(n, computers) {
  let answer = 0;

  const visited = Array(n).fill(0);

  function dfs(node) {
    visited[node] = 1;
    for(let i = 0; i < computers[node].length; i++){
      if(computers[node][i] && !visited[i]) dfs(i);
    }
  }

  for(let i = 0; i < n; i++){
    if(!visited[i]){
      dfs(i);
      answer++;
    }
  }

  return answer;
}


// 그래프 문제로 2차원으로 접근하면 안됨!
// function solution(n, computers) {
//   let answer = 0;
//
//   const dy = [-1, 0, 1, 0];
//   const dx = [0, 1, 0, -1];
//
//   const visited = Array(n).fill().map(() => Array(n).fill(0));
//
//   function dfs(y, x) {
//     visited[y][x] = 1;
//     for(let d = 0; d < 4; d++){
//       const ny = y + dy[d];
//       const nx = x + dx[d];
//       if(ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx] || !computers[ny][nx]) continue;
//       dfs(ny, nx);
//     }
//   }
//
//   for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//       if(computers[i][j] && !visited[i][j]){
//         dfs(i, j);
//         answer++;
//       }
//     }
//   }
//
//   return answer;
// }