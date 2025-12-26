// 문자열 내 마음대로 정렬하기
//https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {

  strings.sort((a, b) => {
    if(a[n] === b[n]) return a.localeCompare(b);
    return a[n].localeCompare(b[n]);
  });

  // 삼항 연산자로 단축
  // strings.sort((a, b) => {
  //   return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
  // })

  return strings;
}

// 정렬 정리
const array = [];

array.sort((a, b) => {
  // 반환값에 따른 정렬 방식:
  // 1. 결과가 0보다 작으면 (음수): a를 b보다 앞에 둡니다. (a, b 순서)
  // 2. 결과가 0이면: 순서를 바꾸지 않습니다.
  // 3. 결과가 0보다 크면 (양수): b를 a보다 앞에 둡니다. (b, a 순서)
  // => 오름 차순: a - b, 내림 차순: (a - b) * -1
});

// 문자열 비교
// 'a', 'b' 대소 비교(<, >, ===)는 가능, 유니코드 번호로 비교
// 'a', 'b' 산술 연산은 불가능, NaN 반환

// 자바스크립트 sort는 문자열로 변환한 뒤, 유니코드 순서로 정렬
// '1', '12' 같은건 산술 연산(-, *, /) 가능(암시적 형변환)
// 주의! '1' + '12' 는 '112' 반환
// 'a', 'b' 산술 연산시 NaN 봔한

// localeCompare()
// 기준 문자열.localeCompare(비교 문자열)
// 앞에 오는 문자면 -1, 같으면 0, 뒤에 오는 문자면 1 반환
// sort와 활용하기 좋음

// sort는 원본 배열 직접 수정(Mutable)
// 원본 보존 필요하다면 [...array].sort() 활용
