const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
let cnt = 0;
let save = -1;

function mergeSort(arr, tmp, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, tmp, left, mid);
    mergeSort(arr, tmp, mid + 1, right);
    merge(arr, tmp, left, mid, right);
  }
}

function merge(arr, tmp, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let t = left;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      tmp[t++] = arr[i++];
    } else {
      tmp[t++] = arr[j++];
    }
  }

  while (i <= mid) tmp[t++] = arr[i++];
  while (j <= right) tmp[t++] = arr[j++];

  for (let p = left; p <= right; p++) {
    arr[p] = tmp[p];
    cnt++;
    if (cnt === k) save = arr[p];
  }
}

const tmp = new Array(n);
mergeSort(a, tmp, 0, n - 1);

console.log(save);
