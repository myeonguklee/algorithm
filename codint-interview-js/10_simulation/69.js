// https://school.programmers.co.kr/learn/courses/30/lessons/120861
// 캐릭터의 좌표

function solution(keyinput, board) {

  const mx = (board[0] - 1) / 2;
  const my = (board[1] - 1) / 2;

  let answer = [0, 0];

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const mp = {
    'up': 1,
    'down': 3,
    'right': 2,
    'left': 0,
  }

  for(key of keyinput){
    const d = mp[key];
    const [x, y] = answer;
    const nx = x + dx[d];
    const ny = y + dy[d];
    if(Math.abs(nx) > mx || Math.abs(ny) > my) continue;
    answer = [nx, ny];
  }


  return answer;
}