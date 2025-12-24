// 정렬이 완료된 두 배열 합치기

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function solution() {
  const n = arr1.length;
  const m = arr2.length;

  let i1 = 0;
  let i2 = 0;

  const res = [];

  // || 조건으로 할 경우,
  // i2가 먼저 끝나는 경우 undefined으로 의도된 동작 x
  while(i1 < n && i2 < m) {
    if(arr1[i1] <= arr2[i2]){
      res.push(arr1[i1]);
      i1++;
    } else{
      res.push(arr2[i2]);
      i2++;
    }
  }

  while(i1 < n) {
    res.push(arr1[i1]);
    i1++;
  }

  while(i2 < m) {
    res.push(arr2[i2]);
    i2++;
  }

  return res;
}

console.log(solution());