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
  const N = +input[0];
  const nums = input[1].split(" ").map(Number);
  const dp = [[1], [1]];
  for (let i = 0; i < N; i++) {
    const upList = [],
      downList = [];
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) upList.push(dp[0][j] + 1);
      if (nums[i] < nums[j]) downList.push(dp[0][j] + 1, dp[1][j] + 1);
    }
    dp[0][i] = Math.max(...upList, 1);
    dp[1][i] = Math.max(...downList, 1);
  }
  console.log(Math.max(...dp[0], ...dp[1]));
}
