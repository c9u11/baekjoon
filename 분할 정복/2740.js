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
  const [N, M] = input[0].split(" ").map(Number);
  const A = [];
  for (let i = 1; i <= N; i++) {
    A.push(input[i].split(" ").map(Number));
  }
  const [, K] = input[N + 1].split(" ").map(Number);
  const B = [];
  for (let i = N + 2; i <= N + M + 1; i++) {
    B.push(input[i].split(" ").map(Number));
  }
  const output = new Array(N).fill().map(() => new Array(K).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
      for (let k = 0; k < M; k++) {
        output[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  console.log(output.map((v) => v.join(" ")).join("\n"));
}
