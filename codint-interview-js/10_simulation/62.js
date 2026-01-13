// 배열 회전하기
const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
const n = 1;

function solve(arr, n) {

  function rotate90(arr) {
    const n = arr.length;
    const rotated = Array(n).fill().map(() => Array(n).fill(0));

    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        // 시계 방향으로 90
        rotated[j][n - i - 1] = arr[i][j];
        // 반시계 방향으로 90
        // rotated[n - j - 1][i] = arr[i][j]
      }
    }
    return rotated;
  }

  let answer = arr.map((row) => [...row]);

  for(let i = 0; i < n; i++) {
    answer = rotate90(answer);
  }

  return answer;
}

console.log(solve(arr, n));