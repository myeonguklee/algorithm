// 부분 배낭 문제

// const items = [[10, 19], [7, 10], [6, 10]];
// const weight_limit = 15;

const items = [[10, 60], [20, 100], [30, 120]];
const weight_limit = 50;


function solve(items, weight_limit) {
  const sortedItems = [...items].sort((a, b) => a[0]/a[1] - b[0]/b[1])
  const limit = weight_limit;

  let smWeight = 0;
  let smValue = 0;

  for(let item of sortedItems) {
    const weight = item[0];
    const value = item[1];

    smWeight += weight;
    smValue += value;

    if(smWeight > limit) {
      smWeight -= weight;
      smValue -= value;
      smValue += value * (limit - smWeight) / weight;
      break;
    } else if (smWeight === limit) break;
  }

  return smValue;
}

console.log(solve(items, weight_limit))