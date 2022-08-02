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
  const [N, M, S] = input;
  const dp = [0, 0];
  let cnt = 0;
  for (let i = 2; i < +M; i++) {
    const char = S[i];
    if (char === "I" && S[i - 1] === "O" && S[i - 2] === "I") {
      dp[i] = dp[i - 2] + 1;
      if (dp[i] >= +N) cnt++;
    } else {
      dp[i] = 0;
    }
  }
  console.log(cnt);
}
