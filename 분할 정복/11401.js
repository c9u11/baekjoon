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
  const [N, K] = input[0].split(" ").map((v) => BigInt(v));
  const P = 1000000007n;
  const dp = [1n];
  for (let i = 1n; i <= N; i = i + 1n) dp[i] = (dp[i - 1n] * i) % P;
  console.log(Number((dp[N] * pow((dp[K] * dp[N - K]) % P, P - 2n, P)) % P));
}

function pow(A, B, P) {
  const oper = [];
  let output = A;
  while (B > 1n) {
    if (B % 2n) {
      oper.push("+");
      B = B - 1n;
    } else {
      oper.push("*");
      B /= 2n;
    }
  }
  while (oper.length) {
    const o = oper.pop();
    if (o === "+") output = (output * A) % P;
    else output = (output * output) % P;
  }
  return output;
}
