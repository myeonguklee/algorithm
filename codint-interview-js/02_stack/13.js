// 크레인 인형 뽑기 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;

  const stk = [];

  for(j of moves){
    for(let i = 0; i < board.length; i++){
      const b = board[i][j - 1]

      if(b !== 0){
        if(stk.length > 0 && stk[stk.length - 1] === b){
          stk.pop();
          answer += 2;
        }else{
          stk.push(b);
        }
        board[i][j - 1] = 0;
        break;
      }
    }
  }

  return answer;
}