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
  const [n, m] = input[0].split(" ").map(Number);
  const dp = [1n, 1n];
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] * BigInt(i);
  console.log(String(dp[n] / (dp[m] * dp[n - m])));
}
