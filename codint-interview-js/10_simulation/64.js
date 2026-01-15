const n = 3

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

function solve(n) {
  const visited = Array(n).fill().map(() => Array(n).fill(0));

  let d = 0;
  let y = 0;
  let x = 0;

  visited[y][x] = 1;

  while(true) {
    if(visited[y][x] === n**2) break;

    const ny = y + dy[d];
    const nx = x + dx[d];

    if(ny < 0 || ny >= n || nx < 0 || nx >= n){
      d = (d + 1) % 4;
      continue;
    }
    if(visited[ny][nx]){
      d = (d + 1) % 4;
      continue;
    }
    visited[ny][nx] = visited[y][x] + 1;
    y = ny;
    x = nx;
  }

  return visited;
}

console.log(solve(n));