// N-Queen
// https://school.programmers.co.kr/learn/courses/30/lessons/12952

// 대각선 체크를 1차원 배열로 만들어서 해결 가능(시간 복잡도 이게 더 유리)

function solution(n) {
  const board = Array(n).fill().map(() => Array(n).fill(0))

  function inCol(col) {
    return board.some((row) => row[col] === 1);
  }

  function inX(row, col) {
    const sm = row + col
    const dis = row - col

    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        if((i + j === sm && board[i][j]) || (i - j === dis && board[i][j])) return true;
      }
    }
    return false;
  }

  function isValid (row, col) {
    return !(inCol(col) || inX(row, col))
  }

  let cnt = 0;

  function go(idx){
    if(idx === n){
      cnt++;
      return;
    }
    for(let i = 0; i < n; i++) {
      if(isValid(idx, i)){
        board[idx][i] = 1;
        go(idx + 1);
        board[idx][i] = 0;
      }
    }
  }

  go(0);

  return cnt;
}