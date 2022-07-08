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
  const [N, K] = input[0].split(" ").map(Number);
  let cnt = 0;
  const result = [];
  const board = new Array(N).fill(true).map((v, i) => i + 1);
  for (let i = 0; i < N; i++) {
    cnt = (cnt + K - 1) % board.length;
    result.push(board.splice(cnt, 1));
  }
  console.log(`<${result.join(", ")}>`);
}
