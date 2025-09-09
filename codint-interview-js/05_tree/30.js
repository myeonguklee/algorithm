// 미로 탈출
// https://school.programmers.co.kr/learn/courses/30/lessons/159993

class Queue {
  constructor() {
    this.q = [];
    this.front = 0;
    this.rear = 0;
  }
  push(item){
    this.q.push(item);
    this.rear++;
  }
  size(){
    return this.rear - this.front;
  }

  empty(){
    return this.front === this.rear;
  }

  pop(){
    return this.q[this.front++];
  }
}

function solution(maps) {
  var answer = 0;

  const n = maps.length;
  const m = maps[0].length;

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];


  const visited = Array(n).fill().map(() => Array(m).fill(0));
  const q = new Queue();

  let sy = -1;
  let sx = -1;

  // 시작점 찾기
  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
      if(maps[i][j] === 'S'){
        sy = i;
        sx = j;
        break;
      }
    }
  }

  let ly = -1;
  let lx = -1;

  visited[sy][sx] = 1;
  q.push([sy, sx]);

  while(q.size()) {
    const [y, x] = q.pop();
    for(let d = 0; d < 4; d++){
      const ny = y + dy[d];
      const nx = x + dx[d];
      if(ny < 0 || ny >= n || nx < 0 || nx >= m ) continue;
      if(visited[ny][nx]) continue;
      if(maps[ny][nx] === 'X') continue;
      visited[ny][nx] = visited[y][x] + 1;
      q.push([ny, nx])
      if(maps[ny][nx] === 'L'){
        ly = ny;
        lx = nx;
      }
    }
  }

  const visited2 = Array(n).fill().map(() => Array(m).fill(0));
  const q2 = new Queue();

  if(ly === -1 && lx === -1) return -1;

  visited2[ly][lx] = visited[ly][lx] - 1;
  q2.push([ly, lx]);

  while(q2.size()) {
    const [y, x] = q2.pop();
    for(let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];
      if(ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
      if(visited2[ny][nx]) continue;
      if(maps[ny][nx] === 'X') continue;
      visited2[ny][nx] = visited2[y][x] + 1;
      q2.push([ny, nx])
      if(maps[ny][nx] === 'E') return visited2[ny][nx];
    }
  }

  return -1;
}