// 두 행렬을 곱한 후 전치 행렬 만들기

// const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
// const matrix2 = [[9,8,7],[6,5,4],[3,2,1]];
const matrix1 = [[2,4,6],[1,3,5],[7,8,9]];
const matrix2 = [[9,1,2],[4,5,6],[7,3,8]];

// 30, 84, 138, 24, 69, 114, 18, 54, 90

function solve(matrix1, matrix2) {
  let matrix = Array(3).fill().map(() => Array(3).fill(0));
  let answer = Array(3).fill().map(() => Array(3).fill(0));

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      for(let k = 0; k < 3; k ++) {
        matrix[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      answer[i][j] = matrix[j][i];
    }
  }

  return answer;
}

console.log(solve(matrix1, matrix2));