// 거스름돈 주기

// const amount = 123;
const amount = 350;

const money = [1, 10, 50, 100]

function solve(amount) {
  money.sort((a, b) => b - a);

  let idx = 0;
  let sm = 0;
  const answer = [];

  while(true){
    if(sm === amount) break;
    sm += money[idx];
    if(sm > amount){
      sm -= money[idx];
      idx++;
    }else{
      answer.push(money[idx]);
    }
  }

  return answer
}

console.log(solve(amount));