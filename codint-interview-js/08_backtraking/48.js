function solution(board) {

  function inRow(num, row) {
    return board[row].includes(num);
  }

  function inCol(num, col) {
    return board.some(row => row[col] === num);
  }

  function inBox(num, row, col) {
    const boxRow = Math.floor(row/3) * 3;
    const boxCol = Math.floor(col/3) * 3;

    for(let i = boxRow; i < boxRow + 3; i++) {
      for(let j = boxCol; j < boxCol + 3; j++) {
        if(board[i][j] === num) return true;
      }
    }
    return false;
  }

  function isValid(num, row, col) {
    return !(inRow(num, row) || inCol(num, col) || inBox(num, row, col));
  }

  const empty = [];

  const n = board.length;
  const m = board[0].length;

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(board[i][j] === 0) empty.push([i, j]);
    }
  }

  function go(idx) {
    if(idx === empty.length) {
      return true;
    }

    for(let i = 1; i <= 9; i++) {
      const [r, c] = empty[idx];
      if (isValid(i, r, c)) {
        board[r][c] = i;
        if (go(idx + 1)) return true;
        board[r][c] = 0;
      }
    }
    return false;
  }

  go(0);

  return board;
}

console.log(
  solution(
    [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ]
  )
)
