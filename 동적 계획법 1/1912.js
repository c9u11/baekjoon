var readline = require("readline");
const { resourceLimits } = require("worker_threads");
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
  const nums = input[1].split(" ").map(Number);

  let dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] > dp[i - 1] + nums[i] ? nums[i] : dp[i - 1] + nums[i];
  }

  console.log(Math.max(...dp));
}
