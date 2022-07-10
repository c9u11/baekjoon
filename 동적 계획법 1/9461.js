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
  const memo = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
  const result = [];

  for (let i = 1; i <= +input[0]; i++) {
    result.push(P(+input[i]));
  }

  console.log(result.join("\n"));

  function P(N) {
    if (memo[N]) return memo[N];
    memo[N] = P(N - 2) + P(N - 3);
    return memo[N];
  }
}
