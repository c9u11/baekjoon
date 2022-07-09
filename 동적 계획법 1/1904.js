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
  const N = +input[0];
  const memo = [0, 1, 2, 3];
  for (let i = 4; i <= N; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
  }

  console.log(memo[N]);
}
