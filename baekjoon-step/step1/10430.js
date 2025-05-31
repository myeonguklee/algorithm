const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim();
const [a, b, c] = input.split(" ").map(Number);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * ( b % c)) % c);