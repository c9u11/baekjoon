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
  const dp = [0];
  let max = 1;
  for (let i = 1; i <= N; i++) {
    if (i * i <= N) dp[i * i] = 1;
    if (!dp[i]) {
      let min = Infinity;
      for (let j = 1; j <= max; j++) {
        min = Math.min(min, dp[i - j * j] + 1);
      }
      dp[i] = min;
    } else max = Math.sqrt(i);
  }
  console.log(dp.at(-1));
}
