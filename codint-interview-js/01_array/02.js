const arr = [4,2,2,1,3,4]

function solution (arr) {
  const setArr = [...new Set(arr)];
  setArr.sort((a, b) => (a - b) * -1);
  return setArr;
}

console.log(solution(arr));

// Set 객체는 해시 알고리즘으로 데이터를 저장하므로 시간 복잡도 O(N)을 보장
// 해시 알고리즘 자체는 시간 복잡도가 O(1)이지만
// 배열의 원소 개수가 N개인 경우 중복값을 제거하기 위해 배열을 한번 순회하고 삽입해야 하므로 시간 복잡도 O(N)

// sort -> O(NlogN)