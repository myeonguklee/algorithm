function solution(n) {

  const arr = Array(n).fill().map((_, idx) => idx + 1);
  console.log(arr);

  const answer = [];

  function go (idx, sm, temp) {
    if(sm === 10) {
      answer.push(temp);
      return;
    }
    if(sm > 10 || idx >= n) return;

    go(idx + 1, sm + arr[idx], [...temp, arr[idx]]);
    go(idx + 1, sm, temp);
  }

  go(0, 0, []);

  console.log(answer);

  return answer
}

solution(7);