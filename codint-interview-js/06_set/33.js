function solution (k, operations) {

  function find (x, parents) {
    if(parents[x] === x) return x;

    parents[x] = find(parents[x], parents);
    return parents[x]
  }

  function union (x, y, parents) {
    const root1 = find(x, parents);
    const root2 = find(y, parents);
    parents[root2] = root1;
  }

  const parents = Array(k).fill().map((_, index) => index);
  let n = k;

  for (const op of operations) {
    if (op[0] === 'u') union(op[1], op[2], parents);
    else if (op[0] === 'f') find(op[1], parents);
  }
  n = new Set(Array.from({length: k}, (_, i) => find(parents, i))).size;

  return n;
}