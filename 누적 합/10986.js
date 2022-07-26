var readline = require("readline");
var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

r.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  main(input);
  process.exit();
});

function main(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const nums = input[1].split(" ").map(Number);
  const remain = new Array(M).fill(0);
  remain[0]++;
  let sum = 0;
  let cnt = 0;
  nums.forEach((v, i) => {
    sum = (sum + (v % M)) % M;
    remain[sum]++;
  });
  for (let i = 0; i < M; i++) {
    cnt += (remain[i] * (remain[i] - 1)) / 2;
  }
  console.log(cnt);
}
