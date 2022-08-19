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
  const [N, B] = input[0].split(" ").map(Number);
  const A = [];
  const queue = [];
  const P = 1000;
  let output = A;
  let cnt = B;
  for (let i = 1; i <= N; i++) A.push(input[i].split(" ").map((v) => +v % P));
  while (cnt > 1) {
    if (cnt % 2) {
      queue.push("+");
      cnt -= 1;
    } else {
      queue.push("*");
      cnt /= 2;
    }
  }
  while (queue.length) {
    const oper = queue.pop();

    if (oper === "+") output = multiply(output, A, P);
    else output = multiply(output, output, P);
  }

  console.log(output.map((v) => v.join(" ")).join("\n"));
}

function multiply(A, B = A, p = Infinity) {
  const N = A.length;
  const M = B.length;
  const K = B.length ? B[0].length : 0;
  const output = new Array(N).fill().map(() => new Array(K).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
      for (let k = 0; k < M; k++) {
        output[i][j] += A[i][k] * B[k][j];
      }
      output[i][j] %= p;
    }
  }
  return output;
}
