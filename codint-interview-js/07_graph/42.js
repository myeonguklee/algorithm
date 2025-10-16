class Queue {
  constructor (){
    this.q = [];
    this.head = 0;
    this.tail = 0;
  }
  push(item){
    this.q.push(item);
    this.tail++;
  }
  size(){
    return this.tail - this.head;
  }
  empty(){
    return this.head === this.tail
  }
  pop(){
    if(!this.empty()){
      return this.q[this.head++];
    }
  }
}

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

function solution(maps) {
  var answer = 0;

  const n = maps.length;
  const m = maps[0].length;

  const q = new Queue();
  const visited = Array(n).fill().map(() => Array(m).fill(0));

  q.push([0, 0]);
  visited[0][0] = 1;

  while(q.size()){
    const [y, x] = q.pop();
    for(let d = 0; d < 4; d++){
      const ny = y + dy[d];
      const nx = x + dx[d];
      if(ny < 0 || ny >= n || nx < 0 || nx >= m || visited[ny][nx] || !maps[ny][nx]) continue;
      q.push([ny, nx]);
      visited[ny][nx] = visited[y][x] + 1;
    }

  }

  answer = visited[n - 1][m - 1] ? visited[n - 1][m - 1] : -1

  return answer;
}