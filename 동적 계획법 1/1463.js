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
  const dp = new Array(N + 1);
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= N; i++) {
    const list = [dp[i - 1]];
    if (i % 2 === 0) list.push(dp[i / 2]);
    if (i % 3 === 0) list.push(dp[i / 3]);
    dp[i] = Math.min(...list) + 1;
  }
  console.log(dp[N]);
}
