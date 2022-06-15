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
  const [N, M] = input[0].split(" ").map(Number);
  const hasMap = {};
  let result = 0;
  for (let i = 1; i <= N; i++) {
    hasMap[input[i]] = true;
  }
  for (let i = N + 1; i < N + 1 + M; i++) {
    if (hasMap[input[i]]) result++;
  }
  console.log(result);
}
