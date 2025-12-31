const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
  const answer = [];

  for(let i = 0; i < commands.length; i++) {
    const [s, e, idx] = commands[i];

    const a = array.slice(s - 1, e).sort((a, b) => a - b);
    answer.push(a[idx - 1]);
  }

  return answer;
}

console.log(solution(array, commands));

// 모노헤르츠
// 누누타코야끼