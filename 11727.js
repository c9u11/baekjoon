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
  const num = +input[0];
  const dp = [0, 1, 3];
  for (let i = 3; i <= num; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }
  console.log(dp[num]);
}
