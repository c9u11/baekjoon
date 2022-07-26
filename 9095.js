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
  input.shift();
  const dp = [0, 1, 2, 4];
  const max = Math.max(...input);
  const result = [];
  for (let i = 4; i <= max; i++) {
    const num = +input[i];
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  input.forEach((v) => {
    result.push(dp[v]);
  });
  console.log(result.join("\n"));
}
