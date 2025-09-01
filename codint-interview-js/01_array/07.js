function solution(dirs) {
  var answer = 0;

  const mapper = {
    'U':0,
    'D':1,
    'L':2,
    'R':3,
  }

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  const visited = Array(11).fill().map(() => Array(11).fill().map(() => new Set()));

  let sy = 5;
  let sx = 5;

  let cnt = 0;

  for(let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];

    const d = mapper[dir];

    const ny = sy + dy[d];
    const nx = sx + dx[d];
    if(ny < 0 || ny > 10 || nx < 0 || nx > 10) continue;

    if(!visited[ny][nx].has(dir) && !visited[sy][sx].has(Object.keys(mapper)[d^1])){
      cnt++;
    }
    visited[ny][nx].add(dir);
    sy = ny; sx = nx;
  }

  answer = cnt;

  return answer;
}