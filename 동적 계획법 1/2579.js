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
  const N = +input.shift();
  const nums = input.map(Number);
  const dp = [];
  dp[0] = nums[0];
  dp[1] = nums[0] + nums[1];
  dp[2] = Math.max(nums[0] + nums[2], nums[1] + nums[2]);
  for (let i = 3; i < N; i++) {
    dp[i] = Math.max(nums[i] + nums[i - 1] + dp[i - 3], nums[i] + dp[i - 2]);
  }
  console.log(dp[N - 1]);
}
