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
  const [N, K] = input.shift().split(" ").map(Number);
  const nums = input.map((v) => v.split(" ").map(Number));
  const dp = new Array(K + 1).fill(0);
  for (let i = 0; i < N; i++) {
    const [W, V] = nums[i];
    for (let j = K; j >= W; j--) {
      dp[j] = Math.max(dp[j], dp[j - W] + V);
    }
  }
  console.log(dp.at(-1));
}
