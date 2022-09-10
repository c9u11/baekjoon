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
  for (let tc = 0; tc < +input[0]; tc++) {
    const N = input[tc * 3 + 1];
    const sticker = [
      input[tc * 3 + 2].split(" ").map(Number),
      input[tc * 3 + 3].split(" ").map(Number),
    ];
    const dp = [[], []];
    let max = -Infinity;
    for (let i = 0; i < N; i++) {
      dp[0][i] = sticker[0][i];
      if (i === 1) dp[0][i] += dp[1][i - 1];
      else if (i > 1)
        dp[0][i] += Math.max(dp[1][i - 1], dp[0][i - 2], dp[1][i - 2]);

      dp[1][i] = sticker[1][i];
      if (i === 1) dp[1][i] += dp[0][i - 1];
      else if (i > 1)
        dp[1][i] += Math.max(dp[0][i - 1], dp[0][i - 2], dp[1][i - 2]);

      max = Math.max(max, dp[0][i], dp[1][i]);
    }

    console.log(max);
  }
}
