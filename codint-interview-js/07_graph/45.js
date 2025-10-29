// 경주로 건설
// https://school.programmers.co.kr/learn/courses/30/lessons/67259

class Queue {
  constructor() {
    this.q = [];
    this.head = 0;
    this.tail = 0;
  }
  push(item) {
    this.q.push(item);
    this.tail++;
  }
  size() {
    return this.tail - this.head;
  }
  empty() {
    return this.head === this.tail;
  }
  pop() {
    if(this.empty()) return null;
    return this.q[this.head++];
  }
}

function solution(board) {
  var answer = 0;

  const n = board.length;
  const m = board[0].length;

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  const visited = Array(n).fill().map(() => Array(m).fill().map(() => Array(4).fill(Infinity)));
  const q = new Queue();

  for(let i = 0; i < 4; i++) {
    const ny = 0 + dy[i];
    const nx = 0 + dx[i];
    if(ny < 0 || ny >= n || nx < 0 || nx >= m || board[ny][nx]) continue;
    q.push([ny, nx, i, 100]);
    visited[ny][nx][i] = 100;
  }

  while(q.size()) {
    const [y, x, d, cost] = q.pop();
    if(visited[y][x][d] < cost) continue;

    for(let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if(ny < 0 || ny >= n || nx < 0 || nx >= m || board[ny][nx]) continue;
      // if(d === i){
      //     if(visited[ny][nx][d] > visited[y][x][d] + 100) {
      //         visited[ny][nx][d] = visited[y][x][d] + 100;
      //         q.push([ny, nx, d, visited[y][x][d] + 100]);
      //     }
      // } else {
      //     if(visited[ny][nx][i] > visited[y][x][d] + 600) {
      //         visited[ny][nx][i] = visited[y][x][d] + 600;
      //         q.push([ny, nx, i, visited[y][x][d] + 600]);
      //     }
      // }
      const newCost = (i === d) ? cost + 100 : cost + 600;
      if(visited[ny][nx][i] > newCost) {
        visited[ny][nx][i] = newCost;
        q.push([ny, nx, i, newCost]);
      }
    }
  }

  return Math.min(...visited[n -1][m - 1]);
}