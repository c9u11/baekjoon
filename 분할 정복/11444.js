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
  let N = BigInt(input[0]);
  if (N === 0n) {
    console.log(0);
    return;
  }
  const P = 1000000007n;
  const BASE = [
    [1n, 1n],
    [1n, 0n],
  ];
  let output = BASE;
  const queue = [];
  while (N > 1n) {
    if (N % 2n) {
      queue.push("+");
      N -= 1n;
    } else {
      queue.push("*");
      N /= 2n;
    }
  }

  while (queue.length) {
    const oper = queue.pop();
    if (oper === "+") output = multiply(output, BASE, P);
    else output = multiply(output, output, P);
  }
  console.log(String(output[1][0]));
}

function multiply(A, B = A, p = Infinity) {
  const N = A.length;
  const M = B.length;
  const K = B.length ? B[0].length : 0;
  const output = new Array(N).fill().map(() => new Array(K).fill(0n));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
      for (let k = 0; k < M; k++) {
        output[i][j] += A[i][k] * B[k][j];
        output[i][j] %= p;
      }
    }
  }
  return output;
}
